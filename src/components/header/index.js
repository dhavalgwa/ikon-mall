import React, { useEffect } from "react";
import { Text, View, Image, TouchableOpacity, BackHandler, Platform } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Styles from "./Styles";

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
        <View style={Styles.headerContainer}>
            <View style={Styles.headerView}>
                <TouchableOpacity onPress={props.backButton == true ? handleBackButtonClick : null} style={Styles.backView}>
                    {
                        props.backButton == true ? (
                            <TouchableOpacity onPress={handleBackButtonClick}>
                                <Ionicons name={Platform.OS == 'ios' ? "backspace-sharp" : "arrow-back"} size={30} color="black" />
                            </TouchableOpacity>
                        ) : null
                    }
                </TouchableOpacity>
                <View style={Styles.headerLeftContainer}>
                    <View style={Styles.imageView}>
                        <Image style={Styles.logoImage} source={require("../../assets/Images/Logo.png")} />
                    </View>
                    {
                        props.showCart == true ? (
                            <TouchableOpacity onPress={goToCardPage} style={Styles.cartView}>
                                <LinearGradient
                                    start={{ x: 0.0, y: 0.5 }}
                                    end={{ x: 0.5, y: 1.0 }}
                                    locations={[0, 1]}
                                    colors={['#4E6CFF', '#7B9AFF']}
                                    style={Styles.cartLGradiant}
                                >
                                    <Text style={Styles.itemNumberText} >10</Text>
                                </LinearGradient>
                                <FontAwesome name="opencart" size={24} color="#4E6CFF" />
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