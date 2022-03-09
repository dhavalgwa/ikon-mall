import React from "react";
import { Text, View, Image } from "react-native";
import Styles from "./indexStyle";
// import Header from "../header/index";
const Development = (props) => {

    return (
        <View>
            <View style={Styles.contenair}>
                <View style={Styles.textView}>
                    <Text style={Styles.text}>This page is under  development</Text>
                </View>
                <View style={Styles.ImageView} >
                    <Image
                        source={require('../../assets/Images/develpment.png')} style={Styles.image}
                    />
                </View>
            </View>
        </View>

    )
}
export default Development;