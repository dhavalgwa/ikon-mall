import react from "react";
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../../Screen/SplashScreen/indexSplash';
import BottomTabNavigation from '../BottomTabNavigation/indexBottomTabNavigation';

const Stack = createNativeStackNavigator();

const StackNavigation = (props) => {
    return (
        <Stack.Navigator
            initialRouteName="Splash">
            <Stack.Screen options={{ header: () => null }} name="Splash" component={Splash} />
            <Stack.Screen options={{ header: () => null }} name="BottomTabNavigation" component={BottomTabNavigation} />
        </Stack.Navigator>
    )
}

export default StackNavigation;