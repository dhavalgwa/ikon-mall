import React, { useEffect } from "react";
import { Text, View, Image, TouchableOpacity, BackHandler } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
// import { FontAwesome } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
import { connect } from "react-redux";

const Header = (props) => {
    const handleBackButtonClick = () => {
        props.navData?.goBack();
    }

    const goToCardPage = () => {
        props.navData.navigate('Cart');
    }

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
    }, []);
    return (
        <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row", width: "100%", paddingTop: 20 }}>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 10, paddingRight: 10, paddingTop: 14, paddingBottom: 14 }}>
                <TouchableOpacity onPress={props.backButton == true ? handleBackButtonClick : null} style={{ flexDirection: 'row', minWidth: 40, alignItems: 'center' }}>
                    {/* {
                        props.backButton == true ? (
                            <TouchableOpacity onPress={handleBackButtonClick}>
                                <Ionicons name="chevron-back" size={30} color="black" />
                            </TouchableOpacity>
                        ) : null
                    } */}
                </TouchableOpacity>
                <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ width: '70%', alignItems: 'center' }}>
                        <Image style={{ height: 28, width: 130 }} source={require("../../assets/Images/Logo.png")} />
                    </View>
                    {
                        props.showCart == true ? (
                            <TouchableOpacity onPress={goToCardPage} style={{ width: '12%' }}>
                                <LinearGradient
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    colors={["#4E6CFF", "#7B9AFF"]}
                                    style={{ height: 49 }}
                                >
                                    <Text style={{ color: 'white', fontSize: 9 }} >10</Text>
                                </LinearGradient>
                                {/* <FontAwesome name="opencart" size={24} color="#4E6CFF" /> */}
                            </TouchableOpacity>
                        ) : null
                    }
                </View>
            </View>
        </View>
    )

}

const actionCreators = () => {

}

export default connect(
    ({ fetchData }) => ({
        fetchData,
    }),
    actionCreators
)(Header);