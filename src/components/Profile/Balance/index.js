import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from "./indexStyles"

const Balance = () => {
    return (
        <View style={Styles.contenar}>
            <View style={Styles.subContenar}>
                <View style={Styles.TextView}>
                    <Text style={Styles.BlanceText}>Balance</Text>
                    <Text style={Styles.ballText}>450 ball</Text>
                </View>
                <View style={Styles.buttonContener}>
                    <TouchableOpacity style={Styles.ButtonColor}>
                        <Text> </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.ButtonWithOutColor}>
                        <Text> </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.ButtonWithOutColor}>
                        <Text> </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.ButtonWithOutColor}>
                        <Text> </Text>
                    </TouchableOpacity>
                </View>
                <View style={Styles.ballTextView}>
                    <Text style={Styles.ballText}> +50 ball</Text>
                </View>
                <View style={Styles.CartView}>
                    <TouchableOpacity style={Styles.cartTouch}>
                        <Image style={Styles.image} source={require("../../../assets/Images/ProfileImages/cart.png")} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Balance;