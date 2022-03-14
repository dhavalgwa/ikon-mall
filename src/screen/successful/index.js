import React from "react";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
const height = Dimensions.get("window").height;
import Styles from "./Styles";


const Success = (props) => {
    const goToDashboard = () => {
        props.navigation.navigate('BottomTabNavigation');
    }
    return (
        <View>
            <View style={Styles.contener}>
                <View>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={["#4E6CFF", "#7B9AFF"]}
                        style={Styles.liner}
                    >
                        <View style={Styles.rounded}></View>
                        {/* <MaterialCommunityIcons style={{ position: "absolute", marginLeft: 14, marginTop: 13 }} name="checkbox-marked-circle-outline" size={30} color="white" /> */}
                    </LinearGradient>
                </View>
                <View style={Styles.textBox}>
                    <Text style={Styles.text}>Successful!</Text>
                    <View style={Styles.textbox2}>
                        <Text style={Styles.text2}>you have sucessfully registerd in our app and start working on it.</Text>
                    </View>
                </View>
            </View>
            <View style={Styles.linerConterner}>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={["#4E6CFF", "#7B9AFF"]}
                    style={Styles.linerdata}
                >
                <TouchableOpacity style={Styles.button} onPress={goToDashboard} >
                    <Text style={Styles.buttonText}>Start Shopping</Text>
                </TouchableOpacity>
                </LinearGradient>
            </View>
        </View>
    )

}
export default Success;