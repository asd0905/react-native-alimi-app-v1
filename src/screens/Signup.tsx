import React, {useState, useRef, useEffect} from "react";
import styled from "styled-components/native";
import {Text, Pressable} from "react-native";
import PropTypes from "prop-types";
import {Image, Input, Button} from '../components/Index';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {validateEmail, removeWhitespace} from "../utils/common";
import {images} from "../utils/images";

export type Props = {
	size: number;
}

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.background};
	padding: 40px 20px;
`;
const ErrorText = styled.Text`
	align-items: flex-start;
	width: 100%;
	height: 20px;
	margin-bottom: 10px;
	line-height: 20px;
	color: ${({theme}) => theme.errorText};
`;

const Signup: React.FC<Props> = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [disabled, setDisabled] = useState(true);
	const [photoUrl, setPhotoUrl] = useState(images.photo);

	const emailRef = useRef<HTMLDivElement>(null!);
	const passwordRef = useRef<HTMLDivElement>(null!);
	const passwordConfirmRef = useRef<HTMLDivElement>(null!);

	const didMountRef = useRef() as any;

	useEffect(() => {
		if (didMountRef.current) {
			let _errorMessage = '';
			if (!name) {
				_errorMessage = '이름을 확인해주세요.';
			} else if (!validateEmail(email)) {
				_errorMessage = '이메일 형식을 확인해주세요.';
			} else if (password.length < 6) {
				_errorMessage = '비밀번호는 6자 이상이어야 합니다.';
			} else if (password !== passwordConfirm) {
				_errorMessage = '비밀번호를 확인해주세요.';
			} else {
				_errorMessage = '';
			}
			setErrorMessage(_errorMessage);
		} else {
			didMountRef.current = true;
		}
	}, [name, email, password, passwordConfirm]);

	useEffect(() => {
		setDisabled(
			!(name && email && password && passwordConfirm && !errorMessage)
		);
	}, [name, email, password, passwordConfirm, errorMessage]);

	const _handleSignupButtonPress = () => {};

	return (
		<KeyboardAwareScrollView
			// contentContainerStyle={{flex: 1}}
			extraScrollHeight={20}
		>
			<Container>
				<Image
					rounded
					url={photoUrl}
					showButton
				/>
				<Input
					label="이름"
					value={name}
					onChangeText={(text: string) => setName(text)}
					onSubmitEditing={() => {
						setName(name.trim());
						emailRef.current.focus();
					}}
					onBlur={() => setName(name.trim())}
					placeholder="이름"
					returnKeyType="next"
				/>
				<Input
					ref={emailRef}
					label="이메일"
					value={email}
					onChangeText={(text: string) => setEmail(removeWhitespace(text))}
					onSubmitEditing={() => passwordRef.current.focus()}
					placeholder="이메일"
					returnKeyType="next"
				/>
				<Input
					ref={passwordRef}
					label="비밀번호"
					value={password}
					onChangeText={(text: string) => setPassword(removeWhitespace(text))}
					onSubmitEditing={() => passwordConfirmRef.current.focus()}
					placeholder="비밀번호"
					returnKeyType="done"
					isPassword
				/>
				<Input
					ref={passwordConfirmRef}
					label="비밀번호 확인"
					value={passwordConfirm}
					onChangeText={(text: string) => setPasswordConfirm(removeWhitespace(text))}
					onSubmitEditing={_handleSignupButtonPress}
					placeholder="비밀번호 확인"
					returnKeyType="done"
					isPassword
				/>
				<ErrorText>{errorMessage}</ErrorText>
				<Button
					title="Signup"
					onPress={_handleSignupButtonPress}
					disabled={disabled}
				/>
			</Container>
		</KeyboardAwareScrollView>
	)
}

export default Signup;
