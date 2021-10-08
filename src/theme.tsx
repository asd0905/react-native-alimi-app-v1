// and extend them!
import {DefaultTheme} from "styled-components";

declare module 'styled-components' {
	interface DefaultTheme {
		background: string;
		text: string;
		label: string,
		inputPlaceholder: string,
		inputBorder: string,
		errorText: string,
		buttonBackground: string,
		buttonTitle: string,
		buttonUnfilledTitle: string,
		headerTintColor: string,
		imageBackground: string;
		imageButtonBackground: string;
		imageButtonIcon: string;
	}
}

const colors = {
	white: '#ffffff',
	black: '#000000',
	grey_0: '#d5d5d5',
	grey_1: '#e5e5e5',
	grey_2: '#5a5a5a',
	red: '#e84118',
	blue: '#389df3',
};

export const theme = {
	background: colors.white,
	text: colors.black,
}

export const lightTheme: DefaultTheme = {
	background: colors.white,
	text: colors.black,
	imageBackground: colors.grey_0,
	label: colors.grey_2,
	inputPlaceholder: colors.grey_1,
	inputBorder: colors.grey_1,
	errorText: colors.red,
	buttonBackground: colors.blue,
	buttonTitle: colors.white,
	buttonUnfilledTitle: colors.blue,
	headerTintColor: colors.black,
	imageButtonBackground: colors.grey_1,
	imageButtonIcon: colors.white,
}

export const darkTheme: DefaultTheme = {
	background: '#34495e',
	text: colors.white,
	imageBackground: colors.grey_0,
	label: colors.grey_0,
	inputPlaceholder: colors.grey_0,
	inputBorder: colors.grey_0,
	errorText: colors.red,
	buttonBackground: colors.blue,
	buttonTitle: colors.white,
	buttonUnfilledTitle: colors.blue,
	headerTintColor: colors.black,
	imageButtonBackground: colors.grey_1,
	imageButtonIcon: colors.white,
}

