import React, {useContext, useLayoutEffect} from 'react';
import {ThemeContext} from 'styled-components/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Exception, Login, Signup} from '../screens';
import {MaterialCommunityIcons} from "@expo/vector-icons";

const Stack = createStackNavigator();

const AuthStack = (props: any) => {
	const theme = useContext(ThemeContext);

	return (
		<Stack.Navigator
			initialRouteName="Login"
			screenOptions={{
				headerTitleAlign: 'left',
				headerTitleStyle: {
					fontSize: 16,
					fontWeight: 'bold',
				},
				cardStyle: {backgroundColor: theme.background},
				headerStyle: {
					backgroundColor: '#ffffff',
					elevation: 0,
					borderBottomColor: '#ffffff',
				},
				headerTintColor: theme.headerTintColor,
				headerRight: () => (
					<MaterialCommunityIcons
						// name='home-variant'
						name={props.theme ? 'alarm-light-outline' : 'alarm-light'}
						size={20}
						style={{
							marginRight: 11,
						}}
						onPress={props.onPress}
					/>
				)
			}}
		>
			<Stack.Screen
				name="로그인"
				component={Login}
				options={{
					// headerShown: false
				}}
			/>
			<Stack.Screen
				name="회원가입"
				component={Signup}
				options={{headerBackTitleVisible: false}}
			/>
			<Stack.Screen
				name='Exception'
				component={Exception}
			/>
		</Stack.Navigator>
	)
}

export default AuthStack;
