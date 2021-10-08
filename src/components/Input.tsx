import React, {forwardRef, useState} from "react";
import styled from "styled-components/native";

export type Props = {
	label: string;
	value: string;
	ref?: any;
	onChangeText: Function;
	onSubmitEditing: Function;
	onBlur?: Function;
	placeholder: string
	isPassword?: boolean;
	maxLength?: number;
	disabled?: boolean;
	inputStyle?: object;
	returnKeyType: string;
	// returnKeyType: string.oneOf(['done', 'next']),
};

const Container = styled.View`
	flex-direction: column;
	width: 100%;
	margin: 10px 0;
`;
const Label = styled.Text<any>`
	font-size: 12px;
	font-weight: 600;
	margin-bottom: 6px;
	color: ${({theme, isFocused}) => (isFocused ? theme.text : theme.label)}
`;

const StyledTextInput = styled.TextInput.attrs(({theme}) => ({
	placeholderTextColor: (theme as any).inputPlaceholder
}))<any>`
	background-color: ${({theme}) => theme.background};
	color: ${({theme}) => theme.text};
	padding: 0 10px;
	font-size: 14px;
	border-bottom-width: 2px;
	border-color: ${({theme, isFocused}) => (isFocused ? theme.text : theme.inputBorder)};
	border-style: solid;
	height: 34px;
`;

const Input: React.FC<Props> = forwardRef(
	(
		{
			label,
			value,
			onChangeText,
			onSubmitEditing,
			onBlur = () => {},
			placeholder,
			isPassword,
			returnKeyType = 'done' || 'next',
			maxLength,
			disabled = false,
			inputStyle,
		},
		ref
	) => {
		const [isFocused, setIsFocused] = useState(false);

		return (
			<Container>
				<Label isFocused={isFocused}>{label}</Label>
				<StyledTextInput
					ref={ref}
					isFocused={isFocused}
					value={value}
					onChangeText={onChangeText}
					onSubmitEditing={onSubmitEditing}
					onFocus={() => setIsFocused(true)}
					onBlur={() => {
						setIsFocused(false);
						onBlur();
					}}
					placeholder={placeholder}
					secureTextEntry={isPassword}
					returnKeyType={returnKeyType}
					maxLength={maxLength}
					autoCapitalize="none"
					autoCorrect={false}
					textContentType="none" // iOS only
					underlineColorAndroid="transparent" // Android only
					labelStyle={{
						color: 'pink'
					}}
					style={inputStyle}
					disabled={disabled}
				/>
			</Container>
		);
	}
);

export default Input;
