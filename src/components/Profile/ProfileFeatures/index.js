import React from "react";
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { connect } from "react-redux";

import Styles from './indexStyle';


const ProfileFeaturesCard = (props) => {
    const AboutPage = () => {
        Alert.alert("HELLOOO")
        props.navigation.navigate('About')
    }
    return (

        <View style={{ width: "95%" }}>

            <TouchableOpacity style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "41%", marginLeft: 33 }}>
                <Image style={{ height: 20, width: 20 }} source={require("../../../assets/Images/ProfileImages/order.png")} />
                <Text style={{ fontSize: 16, fontWeight: "500", color: "#000000" }}>Order history</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "45%", marginLeft: 33, marginTop: 21 }}>
                <Image style={{ height: 20, width: 20 }} source={require("../../../assets/Images/ProfileImages/like.png")} />
                <Text style={{ fontSize: 16, fontWeight: "500", color: "#000000" }}>Liked Products</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "44%", marginLeft: 33, marginTop: 21 }}>
                <Image style={{ height: 20, width: 20 }} source={require("../../../assets/Images/ProfileImages/profile.png")} />
                <Text style={{ fontSize: 16, fontWeight: "500", color: "#000000" }}>Profile Setting</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "29%", marginLeft: 33, marginTop: 21 }}>
                <Image style={{ height: 20, width: 20 }} source={require("../../../assets/Images/ProfileImages/setting.png")} />
                <Text style={{ fontSize: 16, fontWeight: "500", color: "#000000" }}>Setting</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "24%", marginLeft: 33, marginTop: 21 }}>
                <Image style={{ height: 20, width: 20 }} source={require("../../../assets/Images/ProfileImages/qa.png")} />
                <Text style={{ fontSize: 16, fontWeight: "500", color: "#000000" }}>Q&A</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={AboutPage} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "27%", marginLeft: 33, marginTop: 21 }}>
                <Image style={{ height: 20, width: 20 }} source={require("../../../assets/Images/ProfileImages/about.png")} />
                <Text style={{ fontSize: 16, fontWeight: "500", color: "#000000" }}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "30%", marginLeft: 33, marginTop: 21, marginBottom: 21 }}>
                <Image style={{ height: 20, width: 20 }} F source={require("../../../assets/Images/ProfileImages/signourt.png")} />
                <Text style={{ fontSize: 16, fontWeight: "500", color: "#000000" }}>Signout</Text>
            </TouchableOpacity>



        </View>
    )
}

export default connect(({ fetchData }) => ({
    fetchData,
}), {})(ProfileFeaturesCard);