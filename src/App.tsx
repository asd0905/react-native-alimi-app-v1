import React, {useState} from "react";
import {StatusBar, Image, Switch} from "react-native";
import AppLoading from 'expo-app-loading';
import {Asset} from "expo-asset";
import * as Font from 'expo-font';
import {darkTheme, lightTheme} from "./theme";
import {ThemeProvider} from "styled-components/native";
import Navigation from './navigations/index';
import {images} from "./utils/images";

const cacheImages = (images: any) => {
	return images.map((image: any) => {
		if (typeof image === 'string') {
			return Image.prefetch(image);
		} else {
			return Asset.fromModule(image).downloadAsync();
		}
	});
}
const cacheFonts = (fonts: any) => {
	return fonts.map((font: any) => Font.loadAsync(font));
}

const App = () => {
	const [isReady, setIsReady] = useState(false);
	const [isDark, setIsDark] = useState(false);
	const _toggleSwitch = () => setIsDark(!isDark);

	const _loadAssets = async () => {
		const imagesAssets = cacheImages([
			require('../assets/images/splash.png'),
			...Object.values(images),
		]);
		const fontAssets = cacheFonts([]);

		await Promise.all([...imagesAssets, ...fontAssets]);
	}

	return isReady ? (
		<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
			{/*<StatusBar barStyle="light-content" />*/}
			<Navigation onPress={_toggleSwitch} theme={isDark} />
		</ThemeProvider>
	) : (
		<AppLoading
			startAsync={_loadAssets}
			onFinish={() => setIsReady(true)}
			onError={console.warn}
		/>
	)
}

export default App;
