import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { useToast } from 'react-native-paper-toast';
// import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { getCartData, addToCartProduct, removeCartProduct, deleteCartData } from "../../redux/action/index";
import LinearGradient from 'react-native-linear-gradient';
import Header from "../../components/header/index";
import Styles from "./Style";

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
            <View style={Styles.Contener}>
                <Header backButton={true} navData={props.navigation} />
            </View>
            <View>
                <View style={Styles.myOrderTextContener}>
                    <Text style={Styles.myOrderText}>My Order</Text>
                    <TouchableOpacity>
                        <Text style={Styles.Discount}>% Get Discount Coupon</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    style={{ height: "66%" }}
                >
                    {
                        props?.cartData?.data?.length > 0 && props?.cartData?.data?.map((data, id) => {
                            return (
                                <View key={id} style={Styles.mapView} >
                                    <View style={Styles.subMapView}>
                                        <View style={Styles.ImageView}>
                                            <Image source={{ uri: data.image }} style={Styles.image} />
                                        </View>
                                        <View style={Styles.SubMapView2}>
                                            <View style={Styles.productView}>
                                                <Text style={Styles.productText}>{data.productItemName}</Text>
                                                <Text style={Styles.categoryText}>{data.category}</Text>
                                                <View style={Styles.price}>
                                                    <Text style={Styles.CostPrice}>{data.costPrice}</Text>
                                                    <Text style={Styles.mrp}>{data.mrp}</Text>
                                                    <Text style={Styles.sellerPrice}>{data.sellerPrice}</Text>
                                                </View>
                                                <View style={Styles.button}>
                                                    <View style={Styles.subButton} >
                                                        {
                                                            data.quantity == 1 ? (
                                                                <TouchableOpacity style={Styles.deleteButton} onPress={() => deleteCart(data.productItemId)}>
                                                                    {/* <AntDesign name="delete" size={15}
                                                                        style={{ color: "white" }} /> */}
                                                                </TouchableOpacity>
                                                            ) : (
                                                                <TouchableOpacity onPress={() => reduceCount(data.productItemId)} style={Styles.minusButton}>
                                                                    {/* <AntDesign name="minus" size={20}
                                                                        style={{ color: "white" }} /> */}
                                                                </TouchableOpacity>
                                                            )
                                                        }
                                                        <Text style={Styles.qty} >{data.quantity}</Text>
                                                        <TouchableOpacity onPress={() => increseCount(data.productItemId)} style={Styles.plusButton}>
                                                            {/* <AntDesign name="plus" size={20}
                                                                style={{ color: "white" }} /> */}
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View >
                                                        <TouchableOpacity style={Styles.deleteButton2} onPress={() => deleteCart(data.productItemId)}>
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
                <View style={Styles.mainButton}>
                    {props?.cartData?.data?.length == 0 ? (<View style={Styles.totalButton}>
                        <Text style={Styles.ButtonText}>Total amount</Text>
                        <Text style={Styles.valueDispaly}>${0.00}</Text>
                    </View>) : (<View style={Styles.totalButton}>
                        <Text style={Styles.ButtonText}>Total amount</Text>
                        <Text style={Styles.valueDispaly}>${totalvalue}</Text>
                    </View>)

                    }
                    <View style={Styles.checkoutButton}>
                        <LinearGradient style={Styles.LinearGradients}
                            start={{ x: 0.0, y: 0.5 }}
                            end={{ x: 0.5, y: 1.0 }}
                            locations={[0, 1]}
                            colors={['#4E6CFF', '#7B9AFF']}>
                            <TouchableOpacity style={Styles.checkout}>
                                <Text style={Styles.checkoutText}>Checkout</Text>
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
