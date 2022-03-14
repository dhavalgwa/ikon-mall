import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux';
import BottomTabNavigation from "../../Navigation/BottomTabNavigation";
import Drawernavigation from "../../Navigation/DrawerNavigation";
import Styles from './Styles';

const Tab = createBottomTabNavigator();

const Dashboard = (props) => {

    const gotToDescriptionPage = () => {
        props.navigation.navigate('DescriptionHome');
    }

    return (
        <View>
            <View>
                {/* <BottomTabNavigation/> */}
            </View>
        </View>
    )
}

const mapDispatchToProps = {
};

export default connect(({ fetchData }) => ({
    fetchData,
}), mapDispatchToProps)(Dashboard);