import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { useToast } from 'react-native-paper-toast';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { getCartData, addToCartProduct, removeCartProduct, deleteCartData } from "../../redux/action/index";
import LinearGradient from 'react-native-linear-gradient';
import Header from "../../components/header/index";

const Cart = (props) => {
    const toaster = useToast();
    const [addId, setAddId] = useState();
    const [totalvalue, setTotalValue] = useState();

    const arr = []
    useEffect(() => {
        props.getCartData();
    }, [addId, props.fetchData.getCartData?.data,]);

    const deleteCart = (id) => {
        props.deleteCartData(id);
        toaster.show({ message: 'Item Deleted SuccessFully...' });
    }
    const reduceCount = (clickedID) => {
        props.removeCartProduct(clickedID);
        toaster.show({ message: 'Item Removed SuccessFully...' });
    }
    const increseCount = (clickedID) => {
        setAddId(addId);
        props.addToCartProduct(clickedID);
        toaster.show({ message: 'Item Added SuccessFully...' });
    }
    const getTotalPrice = () => {
        props?.fetchData.getCartData?.data?.length > 0 && props?.fetchData.getCartData?.data?.map((data, id) => {
            let value = data.quantity * data.costPrice;
            arr.push(value)
            const reducer = (previousValue, currentValue) => previousValue + currentValue;
            var finalValue = arr.reduce(reducer);
            var finalall = finalValue.toFixed(2)
            setTotalValue(finalall);

        })
    }
    useEffect(() => {
        getTotalPrice();
    })

    return (
        <View>
            <View style={{ height: "10%", justifyContent: "center", alignItems: "center" }}>
                <Header backButton={true} navData={props.navigation} />
            </View>
            <View>
                <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", height: "7%", width: "90%", marginLeft: 16, marginTop: 20 }}>
                    <Text style={{ fontWeight: "500", fontSize: 20 }}>My Order</Text>
                    <TouchableOpacity>
                        <Text style={{ color: "#DE1F36" }}>% Get Discount Coupon</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    style={{ height: "66%" }}
                >
                    {
                        props?.fetchData.getCartData?.data?.length > 0 && props?.fetchData.getCartData?.data?.map((data, id) => {
                            return (
                                <View key={id} style={{ width: "100%", alignItems: 'center', justifyContent: 'center' }} >
                                    <View style={{ display: "flex", flexDirection: "row", backgroundColor: "white", borderRadius: 10, justifyContent: "space-between", width: "95%", margin: 5, padding: 5 }}>
                                        <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
                                            <Image source={{ uri: data.image }} style={{ justifyContent: "center", alignItems: "center", height: 100, width: 100, }} />
                                        </View>
                                        <View style={{ backgroundColor: "white", width: "65%" }}>
                                            <View style={{ marginLeft: 10, paddingTop: 10 }}>
                                                <Text style={{ fontWeight: "400", fontSize: 14, }}>{data.productItemName}</Text>
                                                <Text style={{ fontWeight: "400", fontSize: 14, paddingTop: 3 }}>{data.category}</Text>
                                                <View style={{ flexDirection: "row", paddingTop: 5 }}>
                                                    <Text style={{ fontSize: 16, fontWeight: "700", }}>{data.costPrice}</Text>
                                                    <Text style={{ textDecorationStyle: "solid", textDecorationLine: "line-through", fontSize: 14, fontWeight: "400", marginLeft: 8 }}>{data.mrp}</Text>
                                                    <Text style={{ color: "red", fontSize: 14, fontWeight: "400", marginLeft: 8 }}>{data.sellerPrice}</Text>
                                                </View>
                                                <View style={{ flexDirection: "row", paddingTop: 10, justifyContent: 'space-between', width: "100%" }}>
                                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
                                                        {
                                                            data.quantity == 1 ? (
                                                                <TouchableOpacity style={{ height: 35, width: 35, backgroundColor: "#4E6CFF", borderRadius: 20, alignItems: 'center', justifyContent: 'center' }} onPress={() => deleteCart(data.productItemId)}>
                                                                    <Text>Delete</Text>
                                                                    {/* <AntDesign name="delete" size={15}
                                                                        style={{ color: "white" }} /> */}
                                                                </TouchableOpacity>
                                                            ) : (
                                                                <TouchableOpacity onPress={() => reduceCount(data.productItemId)} style={{ height: 35, width: 35, backgroundColor: "#7B9AFF", borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                                                                    <Text>Remove</Text>
                                                                    {/* <AntDesign name="minus" size={20}
                                                                        style={{ color: "white" }} /> */}
                                                                </TouchableOpacity>
                                                            )
                                                        }
                                                        <Text style={{ fontSize: 21, marginLeft: 10, marginRight: 10 }} >{data.quantity}</Text>
                                                        <TouchableOpacity onPress={() => increseCount(data.productItemId)} style={{ height: 35, width: 35, backgroundColor: "#7B9AFF", borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                                                            <Text>Add</Text>
                                                            {/* <AntDesign name="plus" size={20}
                                                                style={{ color: "white" }} /> */}
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View >
                                                        <TouchableOpacity style={{ height: 35, width: 35, backgroundColor: "#4E6CFF", borderRadius: 20, alignItems: 'center', justifyContent: 'center' }} onPress={() => deleteCart(data.productItemId)}>
                                                            <Text>Delete</Text>
                                                            {/* <AntDesign name="delete" size={15}
                                                                style={{ color: "white" }} /> */}
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        })}

                </ScrollView>
                {/* {BUTTON And total amount} */}
                <View style={{ backgroundColor: "white", height: "15%", display: "flex", flexDirection: 'row', justifyContent: "space-between", width: "100%", alignItems: "center" }}>
                    {props?.fetchData.getCartData?.data?.length == 0 ? (<View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: "400", fontSize: 18, color: "#5270FF" }}>Total amount</Text>
                        <Text style={{ fontWeight: "bold", fontSize: 24 }}>${0.00}</Text>
                    </View>) : (<View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: "400", fontSize: 18, color: "#5270FF" }}>Total amount</Text>
                        <Text style={{ fontWeight: "bold", fontSize: 24 }}>${totalvalue}</Text>
                    </View>)

                    }
                    <View style={{ marginRight: 10, }}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={["#4E6CFF", "#7B9AFF"]}
                            style={{ height: 49 }}
                        >
                            <TouchableOpacity style={{ height: 60, width: 175, borderRadius: 25, display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>Checkout</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </View>
            </View>
        </View>
    )
}

const mapDispatchToProps = {
    getCartData,
    addToCartProduct,
    removeCartProduct,
    deleteCartData
};

export default connect(({ fetchData }) => ({
    fetchData,
}), mapDispatchToProps)(Cart);
