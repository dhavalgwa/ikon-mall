import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Styles from "./indexStyle";
import Data from '../../../data/data';
import { Card } from "react-native-paper";
import { connect } from "react-redux";

const ShopLists = () => {
    const [shopData, setShopData] = useState(Data);
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={{ paddingLeft: 5 }}
        >
            {
                shopData.map((d, id) => {
                    return (
                        <View key={id} style={Styles.contener}>
                            <Card style={Styles.cardContener}>
                                <View>
                                    <TouchableOpacity style={Styles.ImageView}>
                                        <Image style={Styles.Image} source={d.image} /> 
                                        <View style={Styles.timeTextcontener}>
                                            <Text style={Styles.timeText1}>8:00 - 18:00</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={Styles.logoView}>
                                        <Image source={d.logo} style={Styles.logo} />
                                    </View>
                                </View>
                                <View style={Styles.shopNameContenaer}>
                                    <View style={Styles.shopnamesubContener}>
                                        <Text style={Styles.ShopNameText} >{d.shopName}</Text>
                                        <View style={Styles.RatingsContener}>
                                            <Image style={Styles.ratingsImage} source={require('../../../assets/Images/reting.png')} />
                                            <Text>{d.Ratings}</Text>
                                        </View>
                                    </View>
                                    <View style={Styles.addressConter}>
                                        <Image style={Styles.addressImage} source={require('../../../assets/Images/loce.png')} />
                                        <Text style={Styles.addressText}>{d.address}</Text>
                                    </View>
                                </View>
                            </Card>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}
export default connect(({ fetchData }) => ({
    fetchData,
}), {})(ShopLists);