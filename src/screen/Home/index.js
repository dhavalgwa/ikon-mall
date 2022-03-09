/* eslint-disable */
import React, { useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, BackHandler, SafeAreaView, Image } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import Styles from './indexStyle';
import Address from '../../components/Address/index';
import Category from '../../components/Category/index';
import ShopList from '../../components/Shops/index';
import ShopCard from '../../components/ShopCard/index';
import SearchBar from '../../components/SearchBar/index';
import Header from '../../components/header/index';

import {
    allShopDataCategoryWise,
    setDashboardData,
    setFilter,
    setShopData,
    ProductCategory,
} from '../../redux/action/index';

const HomePage = (props) => {

    useEffect(() => {
        props.ProductCategory();
        props.allShopDataCategoryWise();
        props.setFilter();
        props.setDashboardData();
        props.setShopData();
    }, [])

    function handleBackButtonClick() {
        props.navigation.goBack();
        return true;
    }

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
    }, []);

    const navigate = () => {
        props.navigation.navigate('Development');
    }
    const Map = () => {
        props.navigation.navigate('Map');

    }
    return (
        <SafeAreaView>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={Styles.container}
                nestedScrollEnabled={true}
            >
                <Header navData={props.navigation} backButton={false} showCart={true} />
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={["#4E6CFF", "#7B9AFF"]}
                    style={{ height: 49 }}
                >
                    <Address navigate={navigate}/>
                </LinearGradient>
                <View style={Styles.searchView}>
                    <SearchBar filter={false} />
                </View>
                <View style={Styles.choseShopContainer}>
                    <View style={Styles.choseShopView}>
                        <Text style={Styles.choseShopeText} >Choose your shop</Text>
                        <TouchableOpacity onPress={navigate}>
                            <Text style={Styles.ViewAllText}>View all</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.shopListContainer}>
                    <View style={Styles.shopListView}>
                        {
                            props.fetchData.shopData.data == undefined ? (
                                <View style={{ alignItems: 'center' }}>
                                    <Image source={require('../../assets/Images/Loader/Loading.gif')} style={{ height: 100, width: 100 }} />
                                </View>
                            ) : (
                                <ShopList navData={props.navigation} data={props.fetchData.shopData.data} />
                            )
                        }
                    </View>
                </View>
                <View style={Styles.categoryView}>
                    {
                        props.fetchData.homeCategoryData.data == undefined ? (
                            <View style={{ alignItems: 'center' }}>
                                <Image source={require('../../assets/Images/Loader/Loading.gif')} style={{ height: 100, width: 100 }} />
                            </View>
                        ) : (
                            <Category navigate={navigate} data={props.fetchData.homeCategoryData.data} />
                        )
                    }
                </View>
                <View style={Styles.shopCardView}>
                    {
                        props.fetchData.shopData.data == undefined ? (
                            <View style={{ alignItems: 'center' }}>
                                <Image source={require('../../assets/Images/Loader/Loading.gif')} style={{ height: 100, width: 100 }} />
                            </View>
                        ) : (
                            <ShopCard navData={props.navigation} data={props.fetchData.shopData.data} />
                        )
                    }
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

const mapDispatchToProps = {
    setDashboardData,
    allShopDataCategoryWise,
    setFilter,
    setShopData,
    ProductCategory,
};

export default connect(({ fetchData }) => ({
    fetchData,
}), mapDispatchToProps)(HomePage);