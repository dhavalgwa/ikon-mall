import React from "react";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
const height = Dimensions.get("window").height;


const Success = (props) => {
    const goToDashboard = () => {
        props.navigation.navigate('BottomTabNavigation');
    }
    return (
        <View>
            <View style={{ justifyContent: "center", alignItems: "center", height: height / 1.2 }}>
                <View>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={["#4E6CFF", "#7B9AFF"]}
                        style={{ height: 49 }}
                    >
                        <View style={{ height: 60, width: 60 }}></View>
                        {/* <MaterialCommunityIcons style={{ position: "absolute", marginLeft: 14, marginTop: 13 }} name="checkbox-marked-circle-outline" size={30} color="white" /> */}
                    </LinearGradient>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={{ fontSize: 24, fontWeight: "700", textAlign: "center" }}>Successful!</Text>
                    <View style={{ width: "95%", marginLeft: 10 }}>
                        <Text style={{ color: "#666666" }}>you have sucessfully registerd in our app and start working on it.</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: "20%", width: "90%", marginLeft: 18 }}>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={["#4E6CFF", "#7B9AFF"]}
                    style={{ height: 49 }}
                >
                <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", flex: 1, }} onPress={goToDashboard} >
                    <Text style={{ fontSize: 18, fontWeight: "700", color: "#FFFFFF" }}>Start Shopping</Text>
                </TouchableOpacity>
                </LinearGradient>
            </View>
        </View>
    )

}
export default Success;