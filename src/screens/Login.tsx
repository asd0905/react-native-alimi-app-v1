import React, {FC, useEffect, useRef, useState} from 'react';
import styled from "styled-components/native";
import {images} from "../utils/images";
import {Button, Image, Input} from '../components/Index';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {validateEmail, removeWhitespace} from "../utils/common";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Text} from 'react-native';
import {lightTheme, theme} from '../theme';

export type Props = {
	size?: number;
	insets?: number;
	navigation: any;
}

const Container = styled.View<any>`
	flex: 1 1 auto;
	justify-content: center;
	align-items: stretch;
	background-color: ${({theme}) => theme.background};
	padding: 0 20px;
	padding-top: ${({insets: {top}}) => top}px;
	padding-bottom: ${({insets: {bottom}}) => bottom}px;
`;
const ErrorText = styled.Text`
	align-items: flex-start;
	width: 100%;
	height: 20px;
	margin-bottom: 10px;
	line-height: 20px;
	color: ${({theme}) => theme.errorText}
`;
const BottomButton = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
    width: 100%;
    margin-bottom: 40px;
`;
const StyledContent = styled.View`
	flex: 1;
`;

const Login: React.FC<Props> = (
	{
		navigation,
	}
) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const passwordRef = useRef(null) as any;
	const [errorMessage, setErrorMessage] = useState('');
	const [disabled, setDisabled] = useState(true);
	const [parentHeight, setParentHeight] = useState(0);

	const insets = useSafeAreaInsets();
	const _handleEmailChange = (email: string) => {
	const chagedEmail = removeWhitespace(email);
		setEmail(chagedEmail);
		setErrorMessage(
			validateEmail(email) ? '' : '이메일 형식을 확인해주세요.'
		)
	}
	const _handlePasswordChange = (password: string) => {
		setPassword(removeWhitespace(password));
	}
	const _handleLoginButtonPress = () => {
		if (email === 'parent@jiran.com') navigation.navigate('Exception');
	}

	useEffect(() => {
		setDisabled(!(email && password && !errorMessage));
	}, [email, password, errorMessage]);

	const onLayout = (event: any) => {
		const height = event.nativeEvent.layout.height;
		setParentHeight(height);
		console.log(height);
		console.log(parentHeight);
	};

	return (
		<KeyboardAwareScrollView
			// contentContainerStyle={{flex: 1}}
			extraScrollHeight={20}
		>
			<Container onLayout={onLayout} insets={insets} style={{height: parentHeight,}}>
				<Image
					url={images.logo}
					imageStyle={{
						width: 140,
						height: 38,
						marginTop: 20,
						marginBottom: 55,
					}}
				/>
				<StyledContent>
					<Input
						label='이메일'
						value={email}
						onChangeText={_handleEmailChange}
						onSubmitEditing={() => passwordRef.current.focus()}
						placeholder='Email'
						returnKeyType='next'
					/>
					<Input
						label='비밀번호'
						value={password}
						ref={passwordRef}
						onChangeText={_handlePasswordChange}
						onSubmitEditing={_handleLoginButtonPress}
						placeholder='password'
						returnKeyType='done'
						isPassword
					/>
					<ErrorText>{errorMessage}</ErrorText>
					<Button
						title='로그인'
						onPress={_handleLoginButtonPress}
						disabled={disabled}
					/>
				</StyledContent>
				<BottomButton>
					<Button
						title='아이디/비밀번호 찾기'
						isFilled={false}
						disabled={false}
						onPress={() => navigation.navigate('Exception')}
						containerStyle={{
							padding: 0,
							width: 'auto',
						}}
						textStyle={{
							color: '#5a5a5a',
							fontSize: 12,
						}}
					/>
					<Text style={{color: lightTheme.label}}>|</Text>
					<Button
						title='회원가입'
						onPress={() => navigation.navigate('회원가입')}
						isFilled={false}
						disabled={false}
						containerStyle={{
							padding: 0,
							width: 'auto',
						}}
						textStyle={{
							color: '#5a5a5a',
							fontSize: 12,
						}}
					/>
				</BottomButton>
			</Container>
		</KeyboardAwareScrollView>
	)
}

export default Login;
