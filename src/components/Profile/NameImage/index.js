import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './Styles';
import { connect } from "react-redux";

const NameImage = (props) => {
    const goToHome = () => {
        props.navData.navigation.goBack();
    }

    return (
        <View style={Styles.container}>

            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#4E6CFF", "#7B9AFF"]}
                style={{ height: 49 }}
            >
                <View style={Styles.nameImageContainer}>
                    <View style={Styles.imageView}>
                        <TouchableOpacity>
                            <Image style={Styles.profileImage} source={require('../../../assets/Images/profile.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={Styles.nameContainer}>
                        <View style={Styles.nameView}>
                            <Text style={Styles.nameText}>Jonh </Text>
                            <Text style={Styles.nameText}>Antoniome</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>

        </View>
    )
}

export default connect(({ fetchData }) => ({
    fetchData,
}), {})(NameImage);