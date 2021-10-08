import React from "react";
import styled from "styled-components/native";
import PropTypes from 'prop-types';

const TRANSPARENT = 'transparent';

export type Props = {
	title: string;
	onPress: Function;
	disabled: boolean;
	isFilled?: boolean;
	containerStyle?: object;
	textStyle?: object;
}

const Container = styled.Pressable<any>`
	background-color: ${({theme, isFilled}) =>
		isFilled ? theme.buttonBackground : TRANSPARENT}
	align-items: center;
	border-radius: 4px;
	width: 100%;
	padding: 14px;
	opacity: ${({disabled}) => disabled ? 0.5 : 1}
`;
const Title = styled.Text<any>`
	height: 30px;
	line-height: 30px;
	font-size: 16px;
	color: ${({theme, isFilled}) =>
		isFilled ? theme.buttonTitle : theme.buttonUnfilledTitle}
`;

const Button: React.FC<Props> = ({
		containerStyle,
		title,
		onPress,
		isFilled= true,
		disabled= true,
		textStyle,
	}) => {
	return (
		<Container
			style={containerStyle}
			onPress={onPress}
			isFilled={isFilled}
			disabled={disabled}
		>
			<Title isFilled={isFilled} style={textStyle}>{title}</Title>
		</Container>
	)
}

export default Button;
