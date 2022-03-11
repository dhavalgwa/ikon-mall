import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';

import Entypo from 'react-native-vector-icons/Entypo';
import DisableHome from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import HomePage from '../../screen/Home/index';
import Profile from '../../screen/Profile/index';
import StorePage from '../../screen/StorePage/index';
// import Saving from '../../screen/Saving/index';
import Styles from './indexStyle';
import MyOrder from '../../screen/MyOrder/index';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    const [selectedTab, setSelectedTab] = useState('Home');

    const setTabName = (tabName) => {
        setSelectedTab(tabName)
    }

    const Saving = () => {
        return(
            <View style={Styles.savingContainer}>
                <Text>Saving page</Text>
            </View>
        )
    }

    return (
        <Tab.Navigator
            initialRouteName='Home'
            tabBarOptions={{
                inactiveTintColor: 'white',

            }}
            screenOptions={{
                tabBarActiveTintColor: "white",
                tabBarBackground: () => (
                    <View style={{ flex: 1 }}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={["#4E6CFF", "#7B9AFF"]}
                            style={Styles.linearGradient}
                        />
                    </View>
                ),
            }}
        >
            <Tab.Screen options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    return (
                        <View>
                            {selectedTab === 'Home' ?
                                <Entypo name="home" size={size} color={color} />
                                :
                                <DisableHome name="home-outline" size={30} color={color} />
                            }
                        </View>
                    )
                },
            }}
                listeners={{ tabPress: e => setTabName('Home') }}
                name="Home" component={HomePage} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <View>
                                {selectedTab === 'Saved' ?
                                    <AntDesign name="heart" size={24} color={color} />
                                    :
                                    <AntDesign name="hearto" size={24} color={color} />
                                }
                            </View>
                        )
                    },
                }}
                listeners={{ tabPress: e => setTabName('Saved') }}
                name="Saved"
                component={Saving}
            />

            <Tab.Screen options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    return (
                        <View>
                            {selectedTab === 'MyOrder' ?
                                <Entypo name="shopping-bag" size={24} color={color} />
                                :
                                <Feather name="shopping-bag" size={size} color={color} />
                            }
                        </View>
                    )
                }
            }}
                listeners={{ tabPress: e => setTabName('MyOrder') }}
                name="Order" component={MyOrder} />

            <Tab.Screen options={{
                headerShown: false,
                tabBarVisible: false,
                tabBarButton: (props) => null,
            }}
                listeners={{ tabPress: e => setTabName('StorePage') }}
                name="StorePage" component={StorePage} />

            <Tab.Screen options={{
                headerShown: false,
                tabBarLabel: () => null,
                tabBarIcon: ({ color, size }) => {
                    return (
                        <Image source={require('../../assets/Images/profile.png')} style={Styles.profileImage} />
                    )
                }
            }}
                listeners={{ tabPress: e => setTabName('MyOrder') }}
                name="Profile" component={Profile} />

        </Tab.Navigator>
    )
}

export default BottomTabNavigation;