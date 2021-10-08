import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components/native";
import {images} from "../utils/images";
import {Button, Image, Input} from '../components/Index';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Text} from "react-native";

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: ${({theme}) => theme.background};
	padding: 0 20px;
	padding-top: ${({insets: {top}}) => top}px;
	padding-bottom: ${({insets: {bottom}}) => bottom}px;
`;

const Exception = ({navigation}) => {
	const insets = useSafeAreaInsets();

	return (
		<KeyboardAwareScrollView
			contentContainerStyle={{flex: 1}}
			extraScrollHeight={20}
		>
			<Container insets={insets}>
				<Image url={images.logo} imageStyle={{borderRadius: 8}} />
				<Text>
					죄송합니다.
				</Text>
				<Button
					title='돌아가기'
					onPress={() => navigation.navigate('Signup')}
					containerStyle={{
						position: 'absolute',
						bottom: 0,
						left: 0,
						width: '100%',
					}}
				/>
			</Container>
		</KeyboardAwareScrollView>
	)
}

export default Exception;
