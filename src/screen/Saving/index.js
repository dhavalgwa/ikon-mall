import * as React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Discount from './Discount/index';
import Coupons from './Coupons/index';

const Tab = createMaterialTopTabNavigator()

export default function Saving() {
    const tabBarOptions = {
        pressOpacity: 1,
        indicatorStyle: {
            borderBottomColor: '#87B56A',
            borderBottomWidth: 2,
        },
    }
    return (
        <Tab.Navigator tabBarOptions={tabBarOptions}>
            <Tab.Screen name="Discount " component={Discount} />
            <Tab.Screen name="Coupons " component={Coupons} />
        </Tab.Navigator>
    )
}
