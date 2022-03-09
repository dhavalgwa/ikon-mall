import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

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
                        <View key={id} style={{ marginTop: 10 }}>
                            <Card style={{ height: 210, width: 170, borderRadius: 20, marginLeft: 15 }}>
                                <View>
                                    <TouchableOpacity style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Image style={{ height: 105, width: 170, position: "relative", borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={d.image} />
                                        <View style={{ position: "absolute", height: "100%", width: "100%", display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
                                            <Text style={{ color: "white", fontWeight: 'bold' }}>8:00 - 18:00</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ position: "absolute", height: "100%", width: "100%", display: "flex", justifyContent: "flex-end", alignItems: "baseline" }}>
                                        <Image source={d.logo} style={{ height: 35, width: 35, left: 15, top: 12 }} />
                                    </View>
                                </View>
                                <View style={{ marginTop: 10, height: 105, width: "100%", display: "flex", backgroundColor: " #F3F3F0", borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                                        <Text style={{ justifyContent: "flex-start", alignItems: "baseline", marginLeft: 13, fontWeight: "bold" }} >{d.shopName}</Text>
                                        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                                            <Image style={{ height: 20, width: 20, bottom: 2 }} source={require('../../../assets/Images/reting.png')} />
                                            <Text>{d.Ratings}</Text>
                                        </View>
                                    </View>
                                    <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
                                        <Image style={{ height: 20, width: 20, marginLeft: 10 }} source={require('../../../assets/Images/loce.png')} />
                                        <Text style={{ marginLeft: 10, width: "75%" }}>{d.address}</Text>
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