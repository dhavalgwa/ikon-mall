import React, { useEffect } from 'react';
import { View, ScrollView, Dimensions, TouchableOpacity, Text } from 'react-native';
import Styles from '../../screen/Profile/indexStyle';
import { connect } from 'react-redux';
import NameImage from '../../components/Profile/NameImage/index';
// import { FontAwesome } from '@expo/vector-icons';
import Balance from '../../components/Profile/Balance/index';
import { setProfileFeatures } from '../../redux/action/index';
const { height } = Dimensions.get('window');
import Header from '../../components/header/index';

const Profile = (props) => {

    useEffect(() => {
        props.setProfileFeatures();
    }, [])
    const AboutPage = () => {
        props.navigation.navigate('About');

    }
    const profile = () => {
        props.navigation.navigate('ProfilePage');

    }
    const Setting = () => {
        props.navigation.navigate('Setting');

    }
    const qa = () => {
        props.navigation.navigate('Qa');

    }
    const Signout = () => {
        props.navigation.navigate('Login');
    }
    const Order = () => {
        props.navigation.navigate('OrderHistory');

    }
    return (
        <View>
        <View style={Styles.mainContener}>
            <View>
                <Header navData={props.navigation} backButton={true} showCart={true} />
            </View>
            <ScrollView
                style={Styles.ScrollView}
            >
                <View style={Styles.nameImageContener}>
                    <NameImage navData={props} />
                    <Balance />
                </View>
                <View style={Styles.cardContainer}>
                    <View style={Styles.cardSubContaier}>
                        <TouchableOpacity onPress={Order} style={Styles.orderHistoryContenerTouch}>
                            <View style={Styles.orderHistoryContenerView}>
                                <View style={Styles.orderHistoryIcon}>
                                    {/* <FontAwesome name="file-text" size={24} color="blue" /> */}
                                </View>
                                <View style={Styles.orderHistoryContenerText}>
                                    <Text style={Styles.orderHistoryText}>Order history</Text>
                                </View>
                                <View style={Styles.orderHistoryDisplayContenair}>
                                    <View style={Styles.orderHistoryDisplay}>
                                        <Text style={Styles.orderHistoryDisplayText}>4</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={Order} style={Styles.likedContenerTouch}>
                            <View style={Styles.likedContenerView}>
                                <View style={Styles.likeIcon}>
                                    {/* <AntDesign name="hearto" size={24} color="blue" /> */}
                                </View>
                                <View style={Styles.likeTextView}>
                                    <Text style={Styles.liketext}>Liked Products</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={profile} style={Styles.profileSettingContener}>
                            <View style={Styles.profileSettingContenerView}>
                                <View style={Styles.prifileIcon}>
                                    {/* <AntDesign name="profile" size={24} color="blue" /> */}
                                </View>
                                <View style={Styles.profileTextContener}>
                                    <Text style={Styles.profileText}>Profile Setting</Text>
                                </View>
                                <View style={Styles.animatedContener}>
                                    <View style={Styles.animated}>
                                        {/* <AnimatedCircularProgress
                                            size={33}
                                            width={4}
                                            fill={70}
                                            tintColor="#00e0ff"
                                            backgroundColor="#3d5875" /> */}
                                        <Text style={Styles.animatedText}>70%</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={Setting} style={Styles.TouchableOpacitys}>
                            <View style={Styles.containerView}>
                                <View style={Styles.Icons}>
                                    {/* <AntDesign name="setting" size={24} color="blue" /> */}
                                </View>
                                <View style={Styles.Texts}>
                                    <Text style={Styles.text}>Setting</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={qa} style={Styles.TouchableOpacitys}>
                            <View style={Styles.Views}>
                                <View style={Styles.Icons}>
                                    {/* <AntDesign name="question" size={24} color="blue" /> */}
                                </View>
                                <View style={Styles.Texts}>
                                    <Text style={Styles.text}>Q&A</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={AboutPage} style={Styles.TouchableOpacitys}>
                            <View style={Styles.Views}>
                                <View style={Styles.Icons}>
                                    {/* <AntDesign name="contacts" size={24} color="blue" /> */}
                                </View>
                                <View style={Styles.Texts}>
                                    <Text style={Styles.text}>About</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={Signout} style={Styles.TouchableOpacitys}>
                            <View style={Styles.Views}>
                                <View style={Styles.Icons}>
                                    {/* <AntDesign name="login" size={24} color="blue" /> */}
                                </View>
                                <View style={Styles.Texts}>
                                    <Text style={Styles.text}>Sign out</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    </View>
    )
}

const mapDispatchToProps = {
    setProfileFeatures
};

export default connect(({ fetchData }) => ({
    fetchData,
}), mapDispatchToProps)(Profile);