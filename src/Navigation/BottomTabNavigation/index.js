import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';

import HomePage from '../../screen/Home/index';
import Profile from '../../screen/Profile/index';
import StorePage from '../../screen/StorePage/index';
import Saving from '../../screen/Saving/index';
import MyOrder from '../../screen/MyOrder/index';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    const [selectedTab, setSelectedTab] = useState('Home');

    const setTabName = (tabName) => {
        setSelectedTab(tabName)
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
                            style={{ height: 49 }}
                        />
                    </View>
                ),
            }}


        >
            <Tab.Screen options={{
                headerShown: false,
                // tabBarIcon: ({ color, size }) => {
                //     return (
                //         <View>
                //             {selectedTab === 'Home' ?
                //                 <Foundation name="home" size={size} color={color} />
                //                 :
                //                 <Feather name="home" size={24} color={color} />
                //             }
                //         </View>
                //     )
                // },

            }}
                listeners={{ tabPress: e => setTabName('Home') }}
                name="Home" component={HomePage} />
            <Tab.Screen
                options={{
                    // tabBarIcon: ({ color, size }) => {
                    //     return (
                    //         <View>
                    //             {selectedTab === 'Saved' ?
                    //                 <AntDesign name="heart" size={24} color={color} />
                    //                 :
                    //                 <AntDesign name="hearto" size={24} color={color} />
                    //             }
                    //         </View>
                    //     )
                    // },
                }}
                listeners={{ tabPress: e => setTabName('Saved') }}
                name="Saved"
                component={Saving}
            />

            <Tab.Screen options={{
                headerShown: false,
                // tabBarIcon: ({ color, size }) => {
                //     return (
                //         <View>
                //             {selectedTab === 'MyOrder' ?
                //                 <Entypo name="shopping-bag" size={24} color={color} />
                //                 :
                //                 <Feather name="shopping-bag" size={size} color={color} />
                //             }
                //         </View>
                //     )
                // }
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
                        <Image source={require('../../assets/Images/profile.png')} style={{ height: 30, width: 30, borderRadius: 20, resizeMode: 'cover' }} />
                    )
                }
            }}
                listeners={{ tabPress: e => setTabName('MyOrder') }}
                name="Profile" component={Profile} />

        </Tab.Navigator>
    )
}

export default BottomTabNavigation;