import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';

import { connect } from 'react-redux';
import Styles from './Styles';
import { setCategoryId, productCategoryId, setShopByCategoryData } from '../../redux/action/index';

const Category = (props) => {
    const [toggle, setToggle] = useState(0);
    const [categoryName, setCateGoryName] = useState("All");
    const [clickId, setClickId] = useState(null);

    // this function is use cor active Button color
    const categoryActiveColor = async (id, name) => {
        setClickId(id);
        props.productCategoryId(id);
        setCateGoryName(name);
        setToggle(id);
    }
    useEffect(() => {
        props.setCategoryId(toggle, categoryName);
        props.setShopByCategoryData(clickId);
    }, [toggle, categoryName, clickId]);

    const setAllCategory = () => {
        setClickId(undefined);
        props.setShopByCategoryData(clickId);
    }

    return (
        <View style={Styles.categoryView}>
            <View style={Styles.viewOnMap}>
                <Text style={Styles.categoriesText}>Categories</Text>
                <TouchableOpacity onPress={props.navigate}>
                    <Text style={Styles.viewOnMapText} >View on map</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={{ paddingLeft: 9 }}
            >
                <TouchableOpacity onPress={setAllCategory} style={clickId == null ? Styles.allActive : Styles.allDisable}>
                    <Text style={clickId == null ? Styles.allActiveText : Styles.allDisableText}>All</Text>
                </TouchableOpacity>
                {
                    props?.data?.length > 0 && props?.data?.map((item, id) => {
                        return (
                            <TouchableOpacity key={id} onPress={() => categoryActiveColor(item._id, item.name)} style={clickId == undefined ? [Styles.category, Styles.disableButtonName, item.name.length <= 7 && Styles.minWidth] : [Styles.category, toggle !== item._id ? Styles.disableButtonName : Styles.activeButtonName, item.name.length <= 7 && Styles.minWidth]}>
                                <Text style={clickId == undefined ? [Styles.categoryText] : [toggle !== item._id ? Styles.categoryText : Styles.categoryText1]} >{item.name}</Text>
                                {/* <Text style={Styles.categoryText} style={clickId == undefined ? [Styles.categoryText] : [toggle !== item._id ? Styles.categoryText : Styles.categoryText1]} >{item.name}</Text> */}
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

const mapDispatchToProps = {
    setCategoryId,
    productCategoryId,
    setShopByCategoryData
};

export default connect(({ fetchData }) => ({
    fetchData,
}), mapDispatchToProps)(Category);
