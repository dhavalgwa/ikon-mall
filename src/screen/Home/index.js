/* eslint-disable */
import React, { useEffect } from "react";
import { View, ScrollView, BackHandler, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import Styles from './indexStyle';
import Address from '../../components/Address/index';
import Category from '../../components/Category/index';
import ShopList from '../../components/Shops/index';
import ShopCard from '../../components/ShopCard/index';
import SearchBar from '../../components/SearchBar/index';
import Header from '../../components/header/index';
import Loader from '../../components/Loader/LoaderIndex';
import LabelView from '../../components/lableView/LableIndex';

import {
    allShopDataCategoryWise,
    setDashboardData,
    setFilter,
    ProductCategory,
} from '../../redux/action/index';
import { setShopData } from '../../redux/action/shop';

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
                    <Address navigate={navigate} />
                </LinearGradient>
                <View style={Styles.searchView}>
                    <SearchBar filter={false} />
                </View>
                <View>
                    <LabelView navigate={navigate} label={'Choose your shop'} view={'View all'} />
                </View>
                <View style={Styles.shopListContainer}>
                    <View style={Styles.shopListView}>
                        {
                            props.isLoader ? (
                                <Loader  text={"Loading Shops"} image={"https://i.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"} />
                            ) : (
                                <ShopList navData={props.navigation} data={props.shopList} />
                            )
                        }
                    </View>
                </View>
                {/* <View style={Styles.categoryView}>
                    {
                        props.fetchData.homeCategoryData.data == undefined ? (
                          <Loader />
                        ) : (
                            <Category navigate={navigate} data={props.fetchData.homeCategoryData.data} />
                        )
                    }
                </View> */}
                <View style={Styles.shopCardView}>
                    {
                        props.isLoader ? (
                            <Loader/>
                        ) : (
                            <ShopCard navData={props.navigation} data={props.shopList} />
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

export default connect(({ shop }) => ({
    shopList: shop.shopsList,
    isLoader: shop.loading
}), mapDispatchToProps)(HomePage);