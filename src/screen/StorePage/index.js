import React, { useState, useEffect } from "react";
import { ScrollView, View, SafeAreaView, TouchableOpacity, Text, BackHandler, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import StoreIntro from '../../components/StorePage/StoreIntro/index';
import Banner from '../../components/StorePage/Banner/index';
import Styles from '../../components/Category/indexStyle';
import storePageStyles from './indexStyle';
import ItemCard from '../../components/StorePage/ItemCard/index';
import { connect } from 'react-redux';
import {
    setFootball,
    setCloths,
    setOneDayData,
    setProductList,
    setBannerData,
    Products
} from '../../redux/action/index';

const StorePage = (props) => {
    const [toggle, setToggle] = useState(0);
    const [shortBy, setShortBy] = useState();
    const [productId, setProductId] = useState(0);

    useEffect(async () => {
        props.setFootball();
        props.setCloths();
        props.setOneDayData();
        props.setProductList();
        props.setBannerData();
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

    useEffect(() => {
        props.Products(props.route.params._id, shortBy);
        setProductId(props.route.params._id)
    }, [props.route.params._id, shortBy])

    const categoryActiveColor = (id, short) => {
        setToggle(id);
        setShortBy(short);
    }

    return (
        <SafeAreaView>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
            >
                <StatusBar style="light" />
                <View style={storePageStyles.storeIntroContainer} >
                    <View style={storePageStyles.storeView}>
                        <StoreIntro Data={props.route.params} navData={props.navigation} />
                    </View>
                </View>
                <View style={storePageStyles.bannerView}>
                    <Banner data={props.fetchData.bannerData} />
                </View>
                <View style={storePageStyles.categoryContainer}>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        nestedScrollEnabled={true}
                        horizontal={true}
                    >
                        {
                            props?.fetchData.productList?.length > 0 && props?.fetchData.productList?.map((item, id) => {
                                return (
                                    <View key={id}>
                                        {
                                            item == undefined ? (
                                                <View style={Styles.conternair}>
                                                    <Image source={require('../../assets/Images/Loader/Loading.gif')} style={Styles.image} />
                                                </View>
                                            ) : (
                                                <TouchableOpacity onPress={() => categoryActiveColor(id, item.param)} style={[Styles.category, toggle !== item.id ? Styles.disableButtonName : Styles.activeButtonName, item.name.length <= 7 && Styles.minWidth]}>
                                                    <Text style={toggle !== item.id ? Styles.categoryText : Styles.categoryText1} >{item.name}</Text>
                                                </TouchableOpacity>
                                            )
                                        }
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                </View>
                <View>
                    {
                        props?.fetchData?.productData?.length > 0 && props?.fetchData?.productData?.map((product, id) => {
                            return (
                                <View key={id}>
                                    <View style={storePageStyles.itemContainer}>
                                        <View style={storePageStyles.lableMoreView}>
                                            <Text style={storePageStyles.lableText} >{product.name}</Text>
                                            <TouchableOpacity>
                                                <Text style={storePageStyles.moreViewText} >View more</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ marginBottom: 15, alignItems: 'flex-start' }}>
                                            <ItemCard timeData={false} Data={product.productitems_info} Horizontal={true} />
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const mapDispatchToProps = {
    setFootball,
    setCloths,
    setOneDayData,
    setProductList,
    setBannerData,
    Products
};

export default connect(({ fetchData }) => ({
    fetchData,
}), mapDispatchToProps)(StorePage);