import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import LinearGradient from 'react-native-linear-gradient';


import { Color } from '../../../constant/Constant';
import Styles from './indexStyle';
import { connect } from 'react-redux';

const StoreIntro = (props) => {
    const goToMarketInfo = () => {
        props.navData.navigate('StoreInfo');
    }

    const goToNotification = () => {
        props.navData.navigate('Notification');
    }

    // Here is logic for open Time Add colon
    function open(str, index, stringToAdd) {
        return str.substring(0, index) + stringToAdd + str.substring(index, str.length);
    }
    var str = props.Data.open.toString();
    let stringToAdd = ":";
    const openTime = open(str, str.length == 4 ? 2 : 1, stringToAdd);


    // Here is logic for close Time Add colon
    function close(string, index, stringToAdd) {
        return string.substring(0, index) + stringToAdd + string.substring(index, string.length);
    }
    let string = props.Data.close.toString();
    let Add = ":";
    const closeTime = close(string, string.length == 4 ? 2 : 1, Add);

    return (
        <View style={Styles.container}>
            <View style={Styles.backgroundImageView}>
                <Image source={require('../../../assets/Images/shopBackground.jpg')} style={Styles.image} />
            </View>
            <View style={Styles.storeIntroContainer}>
                <View style={Styles.nameLableContainer}>
                    <View style={Styles.nameLabelView}>
                        <View style={Styles.imageView}>
                            <TouchableOpacity>
                                <Image source={{ uri: props.Data.logo }} style={Styles.bgImage} />
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.descriptionView}>
                            <View style={Styles.nameView}>
                                <Text style={Styles.nameText}>{props.Data.shopName}</Text>
                                <TouchableOpacity>
                                    <MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
                                </TouchableOpacity>
                            </View>
                            <Text style={Styles.timeText} >Working hours {openTime} - {closeTime}</Text>
                        </View>
                    </View>
                    <View style={Styles.notificationView}>
                        <TouchableOpacity onPress={goToNotification} style={Styles.notiFication} >
                            <MaterialIcons name="notifications" size={24} color="#516FFF" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.ratingView}>
                    <Image source={require('../../../assets/Images/blureView.png')} style={Styles.blureImage} />
                    <View style={Styles.blureContainView}>
                        <View style={Styles.blureView}>
                            <TouchableOpacity>
                                <AntDesign name="star" size={17} color={Color.orange} />
                            </TouchableOpacity>
                            <Text style={Styles.blureRatingText}>  {props.Data.rating.$numberDecimal}</Text>
                        </View>
                    </View>
                </View>

                <View style={Styles.marketInfoOrderProcessContainer}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={["#4E6CFF", "#7B9AFF"]}
                        style={Styles.linearBackground}
                    >
                        <View style={Styles.marketInfoOrderProcessView}>
                            <TouchableOpacity onPress={goToMarketInfo} style={Styles.marketInfoView}>
                                <Foundation name="info" size={24} color={"white"} />
                                <Text style={Styles.marketInfoText}>Market info</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.marketInfoView}>
                                <Ionicons name="md-location-sharp" size={24} color={"white"} />
                                <Text style={Styles.orderText}>Order in process</Text>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                </View>

            </View>
        </View >
    )
}

const mapDispatchToProps = () => {

}

export default connect(({ fetchData }) => ({
    fetchData,
}), mapDispatchToProps)(StoreIntro);