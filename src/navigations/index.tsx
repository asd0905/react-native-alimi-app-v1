import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import AuthStack from "./AuthStack";
import ExceptTap from "./ExceptTap";

const Navigation = (props: any) => {
	return (
		<NavigationContainer>
			<AuthStack onPress={props.onPress} theme={props.theme} />
			{/*<ExceptTap />*/}
		</NavigationContainer>
	);
};

export default Navigation;
