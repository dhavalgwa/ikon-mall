import React from "react";
import { View, Text, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../../screen/SplashScreen/index';
import BottomTabNavigation from '../BottomTabNavigation/index';
import Signup from "../../screen/Signup/Index";
import { connect } from 'react-redux';

import Development from "../../screen/underDevopment/index";
import Map from "../../screen/Map/index";
import Notification from '../../screen/StoreInfo/Notification/index';
import StoreInfo from "../../screen/StoreInfo/index";
import SignIn from "../../screen/SignIn/index";
import Styles from './indexStyle';
import ProductDetail from '../../screen/ProductDetail/index';
import ProductList from '../../screen/ProductList/index';
import Login from '../../screen/Login/index';
import About from "../../screen/Profile/About/index";
import Cart from '../../screen/Cart/index';
import OrderHistory from '../../screen/Profile/OrderHistory/index';
import ProfilePage from "../../screen/Profile/ProfileSetting/index";
import Qa from "../../screen/Profile/Qa/index";
import Setting from "../../screen/Profile/Setting/index";
import Success from "../../screen/successful/index";

const Stack = createNativeStackNavigator();

const Navigation = (props) => {

    return (
        <Stack.Navigator
            lazy={true}
            optimizationsEnabled={true}
            initialRouteName="Splash">
            <Stack.Screen options={{ header: () => null }} name="Splash" component={Splash} />
            <Stack.Screen options={{ header: () => null }} name="BottomTabNavigation" component={BottomTabNavigation} />
            <Stack.Screen options={{ title: null, header: () => null, }} name="Signup" component={Signup} />
            <Stack.Screen options={{ title: null, header: () => null, }} name="SignIn" component={SignIn} />
            <Stack.Screen options={{ title: null, header: () => null, }} name="Cart" component={Cart} />
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
            <Stack.Screen options={{ title: props.fetchData.Category?.categoryName || 'All' }} name="ProductList" component={ProductList} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen options={{ title: null, header: () => null, }} name="Login" component={Login} />
            <Stack.Screen options={{ title: 'Development' }} name="Development" component={Development} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="OrderHistory" component={OrderHistory} />
            <Stack.Screen name="ProfilePage" component={ProfilePage} />
            <Stack.Screen name="Qa" component={Qa} />
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen options={{ title: null, header: () => null, }} name="Success" component={Success} />
            <Stack.Screen
                options={{
                    title: null,
                    headerRight: () => {
                        return (
                            <View style={Styles.storeInfoHeaderView}>
                                <View>
                                    <Image
                                        source={require('../../assets/Images/logo1.png')}
                                        style={Styles.storeInfoImage}
                                    />
                                </View>
                                <View>
                                    <Text style={Styles.storeInfoTitleText}>
                                        Wallmart Shoes
                                    </Text>
                                </View>
                            </View>
                        )
                    },
                }}
                name="StoreInfo"
                component={StoreInfo}
            />
        </Stack.Navigator>
    )
}

Navigation.propTypes = {};
Navigation.defaultProps = {};

const actionCreators = {};

export default connect(
    ({ fetchData }) => ({
        fetchData,
    }),
    actionCreators
)(Navigation);