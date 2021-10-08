import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Exception} from "../screens";

const Tab = createBottomTabNavigator();

const ExceptTap = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name='Exception'
				component={Exception}
			/>
		</Tab.Navigator>
	)
};

export default ExceptTap;
