import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MarketInfo from "./Market info";
import DeliveryTime from "./Delivery Times";

import Styles from './Styles';

const Tab = createMaterialTopTabNavigator();

export default function TopTanNavigation() {
    const tabBarOptions = {
        pressOpacity: 1,
        indicatorStyle: Styles.tabStyles,
    }
    return (
        <Tab.Navigator tabBarOptions={tabBarOptions} >
            <Tab.Screen name="Market Info" component={MarketInfo} />
            <Tab.Screen name="Delivery Time" component={DeliveryTime} />
        </Tab.Navigator>

    );
}
