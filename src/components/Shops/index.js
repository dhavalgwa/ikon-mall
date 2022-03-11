import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Styles from '../Shops/indexStyles';
import { Ionicons } from '@expo/vector-icons';
import LinearGradient from 'react-native-linear-gradient';
import { Color } from "../../constant/Constant";
import { connect } from "react-redux";
const ShopList = (props) => {

    const goToStorePage = (shopData) => {
        props.navData.navigate('StorePage', shopData);
    }

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal={true}
        >
            {
                props?.data?.length > 0 && props?.data?.map((shopData, id) => {
                    // Here is logic for open Time Add colon
                    function open(str, index, stringToAdd) {
                        return str.substring(0, index) + stringToAdd + str.substring(index, str.length);
                    }
                    var str = shopData.open.toString();
                    let stringToAdd = ":";
                    const openTime = open(str, str.length == 4 ? 2 : 1, stringToAdd);


                    // Here is logic for close Time Add colon
                    function close(string, index, stringToAdd) {
                        return string.substring(0, index) + stringToAdd + string.substring(index, string.length);
                    }
                    let string = shopData.close.toString();
                    let Add = ":";
                    const closeTime = close(string, string.length == 4 ? 2 : 1, Add);

                    return (
                        <View key={id} style={Styles.shopContainer}>
                            <TouchableOpacity onPress={() => goToStorePage(shopData)} style={Styles.shopCardView}>
                                <View style={Styles.imageView}>
                                    <Image source={{ uri: shopData.bgImage }} style={Styles.image} />
                                </View>
                                <View style={Styles.descriptionView}>
                                    <View style={Styles.description}>
                                        <Text style={Styles.shopNameText}>{shopData.name}</Text>
                                        <Text style={{ color: Color.darkWiteColor, fontSize: 10, }}>{shopData.desc}</Text>
                                    </View>
                                </View>
                                <LinearGradient
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    colors={["#4E6CFF", "#7B9AFF"]}
                                    style={Styles.bottomLinear}
                                >
                                    <View style={Styles.timeView}>
                                        <Ionicons name="time" size={15} color={"white"} />
                                        <Text style={Styles.timeText}>  {openTime} - {closeTime}</Text>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}
export default connect(({ fetchData }) => ({
    fetchData,
}), {})(ShopList);