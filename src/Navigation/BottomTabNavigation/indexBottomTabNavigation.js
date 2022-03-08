import react from "react";
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  ActiveHome  from 'react-native-vector-icons/Entypo';
import ActiveHeart  from 'react-native-vector-icons/Entypo';
import Order from 'react-native-vector-icons/MaterialCommunityIcons';


import Home from '../../Screen/Home/indexHome';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    const Saved = () => {
        return (
            <View style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <Text>Saved Page</Text>
            </View>
        )
    }
    const MyOrder = () => {
        return (
            <View style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <Text>MyOrder Page</Text>
            </View>
        )
    }
    const Profile = () => {
        return (
            <View style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <Text>Profile Page</Text>
            </View>
        )
    }

    return (
        <Tab.Navigator
            tabBarOptions={{
                inactiveTintColor: 'blue',
            }}
        >
            <Tab.Screen options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    return (
                        <ActiveHome
                            name="home"
                            size={size}
                            color={color}
                        />
                    )
                }
            }} name="Home" component={Home} />
            <Tab.Screen options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    return (
                        <ActiveHeart
                            name="heart"
                            size={size}
                            color={color}
                        />
                    )
                }
            }} name="Saved" component={Saved} />
            <Tab.Screen options={{ 
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    return (
                        <Order
                            name="shopping"
                            size={size}
                            color={color}
                        />
                    )
                }
            }} name="MyOrder" component={MyOrder} />
            <Tab.Screen options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    return (
                        <Image source={require('../../assets/Images/profile.png')} style={{ height: 30, width: 30, borderRadius: 20, resizeMode: 'cover' }} />
                    )
                } }} name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation;