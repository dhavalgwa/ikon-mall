import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Color } from "../../constant/Constant";
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import Styles from '../ShopCard/indexStyle';
import { setCategoryId, shopCartCategoryWiseId } from '../../redux/action/index';

const ShopCard = (props) => {
    const [defaultCatId, setDefaultCatId] = useState(0);

    useEffect(() => {
        props.setCategoryId();
        setDefaultCatId(0);
    }, [defaultCatId])

    const goToStorePage = async (shopId) => {
        props.shopCartCategoryWiseId(shopId);
        props.navData.navigate('ProductList');
    }

    const displayData = (object, shopId) => {
        // Here is logic for open Time Add colon
        function open(str, index, stringToAdd) {
            return str.substring(0, index) + stringToAdd + str.substring(index, str.length);
        }
        var str = object.openTime.toString();
        let stringToAdd = ":";
        const openTime = open(str, str.length == 4 ? 2 : 1, stringToAdd);


        // Here is logic for close Time Add colon
        function close(string, index, stringToAdd) {
            return string.substring(0, index) + stringToAdd + string.substring(index, string.length);
        }
        let string = object.closeTime.toString();
        let Add = ":";
        const closeTime = close(string, string.length == 4 ? 2 : 1, Add);

        return (
            <View key={shopId} >
                <TouchableOpacity onPress={() => goToStorePage(shopId)} style={Styles.cardView}>
                    <View>
                        <Image style={Styles.image} source={{ uri: object.shopLogo }} />
                    </View>
                    <View style={Styles.detailView}>
                        <View style={Styles.name_desc} >
                            <Text style={Styles.shopeName} >{object.shopName}</Text>
                            <Text style={Styles.descriptionText}>{object.desc}</Text>
                        </View>
                        <View style={Styles.timeView}>
                            <View style={Styles.time}>
                                <Ionicons name="time-sharp" size={17} color={Color.orange} />
                                <Text style={Styles.timeText}> {openTime} - {closeTime} </Text>
                            </View>
                            <View style={Styles.subTimeView}>
                                <AntDesign name="star" size={17} color={Color.orange} />
                                <Text style={Styles.text}>  4.5</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={Styles.container}>
            {
                props.fetchData.shopCardList?.data?.length > 0 && props.fetchData.shopCardList?.data?.map((shopData) => {
                    return (
                        displayData(shopData, shopData._id)
                    )
                })
            }
        </View>
    )
}

const mapDispatchToProps = {
    setCategoryId,
    shopCartCategoryWiseId
};

export default connect(({ fetchData }) => ({
    fetchData,
}), mapDispatchToProps)(ShopCard);