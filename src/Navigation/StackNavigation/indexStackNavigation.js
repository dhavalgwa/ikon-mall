import react from "react";
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../../Screen/SplashScreen/indexSplash';

const Stack = createNativeStackNavigator();

const StackNavigation = (props) => {
    return(
        <Stack.Navigator
            lazy={true}
            optimizationsEnabled={true}
            initialRouteName="Splash">
            <Stack.Screen options={{ header: () => null }} name="Splash" component={Splash} />


            
        </Stack.Navigator>
    )
}

export default StackNavigation;