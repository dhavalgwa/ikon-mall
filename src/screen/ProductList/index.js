import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { FlatGrid } from 'react-native-super-grid';

import Styles from './Styles'
import LableCss from '../Home/Styles';
import SearchBar from '../../components/SearchBar/index';
import BrandShopList from '../../components/BrandShopList/index';
import { setFootball, Products, setFilter, setBrandData, categoryProduct } from '../../redux/action/index';
import ProductItemCard from '../../components/StorePage/ItemCard/ProductItemCard';

const ProductList = (props) => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        props.setFootball();
        props.Products();
    }, [])

    useEffect(() => {
        props.setBrandData(props.fetchData.shopCartCatWise, props.fetchData.shopCategoryId);
    }, [])

    useEffect(() => {
        setToggle(true)
    }, [props.fetchData.shopCartCatWise])

    useEffect(() => {
        props.categoryProduct(props.fetchData.shopCartCatWise, props.fetchData.shopCategoryId, props.fetchData.brandId);
    }, [props.fetchData.categoryProductData.data, props.fetchData.brandId]);


    useEffect(() => {
        props.setFilter();
    }, []);

    return (
        <View>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <View style={Styles.searchView}>
                    <SearchBar filter={true} />
                </View>

                <View style={Styles.brandShopListView}>
                    {
                        props.fetchData.productBrandData.data == undefined ? (
                            <View style={{ alignItems: 'center' }}>
                                <Image source={require('../../assets/Images/Loader/Loading.gif')} style={Styles.image} />
                            </View>
                        ) : (
                            <BrandShopList brandData={props.fetchData.productBrandData.data} />
                        )
                    }
                </View>
                <View style={Styles.lableView}>
                    <TouchableOpacity>
                        <Text style={LableCss.choseShopeText} >All {props?.fetchData.productTitle}</Text>
                    </TouchableOpacity>
                </View>
                {
                    props?.fetchData.categoryProductData?.data == undefined ? (
                        <View style={{ alignItems: 'center' }}>
                            <Image source={require('../../assets/Images/Loader/Loading.gif')} style={Styles.image} />
                        </View>
                    ) : (
                        <FlatGrid
                            itemDimension={150}
                            style={styles.gridView}
                            data={props?.fetchData.categoryProductData?.data}
                            renderItem={({ item, index }) => (
                                <ProductItemCard key={index} timeData={false} Data={item} Horizontal={false} />
                            )}
                        />
                    )
                }
            </ScrollView>
        </View>
    )
}

const mapDispatchToProps = {
    setFootball,
    Products,
    setFilter,
    setBrandData,
    categoryProduct
};

export default connect(({ fetchData }) => ({
    fetchData,
}), mapDispatchToProps)(ProductList);

