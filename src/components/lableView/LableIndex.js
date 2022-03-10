import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from "./LableStyles";


const LabelView = (props) => {
    const navigate = () => {
        props.navigate('Development');
    }

    return (
        <View style={Styles.choseShopContainer}>
            <View style={Styles.choseShopView}>
                <Text style={Styles.choseShopeText} >Choose your shop</Text>

                <TouchableOpacity onPress={navigate}>
                    <Text style={Styles.ViewAllText}>View all</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LabelView;
