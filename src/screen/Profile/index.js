import React, { useEffect } from 'react';
import { View, ScrollView, Dimensions, TouchableOpacity, Text } from 'react-native';
import Styles from '../../screen/Profile/indexStyle';
import { connect } from 'react-redux';
import NameImage from '../../components/Profile/NameImage/index';
// import { FontAwesome } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';
import Balance from '../../components/Profile/Balance/index';
import { setProfileFeatures } from '../../redux/action/index';
// import { AnimatedCircularProgress } from 'react-native-circular-progress';
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
            <View style={{ alignItems: 'center', backgroundColor: 'white', height: height }}>
                <View>
                    <Header navData={props.navigation} backButton={true} showCart={true} />
                </View>
                <ScrollView
                    style={{ width: '95%' }}
                >
                    <View style={{ height: 200, width: '100%' }}>
                        <NameImage navData={props} />
                        <Balance />
                    </View>
                    <View style={Styles.cardContainer}>
                        <View style={{ width: "100%" }}>
                            <TouchableOpacity onPress={Order} style={{ display: "flex", flexDirection: "row", alignItems: 'center', width: "100%" }}>
                                <View style={{ display: "flex", flexDirection: "row", alignItems: 'center', width: "100%" }}>
                                    <View style={{ flexDirection: "row", width: '10%' }}>
                                        {/* <FontAwesome name="file-text" size={24} color="#4F6DFF" /> */}
                                    </View>
                                    <View style={{ flexDirection: "row", width: '90%' }}>
                                        <Text style={{ fontSize: 16, fontWeight: "500", color: "#000000" }}>Order history</Text>
                                    </View>
                                    <View style={{ position: "absolute", right: 0, alignContent: 'center', justifyContent: 'center' }}>
                                        <View style={{ alignItems: 'flex-end', backgroundColor: '#7A99FF', alignItems: 'center', justifyContent: 'center', width: 30, height: 30, borderRadius: 50 }}>
                                            <Text style={{ color: "white", fontWeight: "700", fontSize: 18, color: "white", position: 'relative', }}>4</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={Order} style={{ display: "flex", flexDirection: "row", alignItems: 'center', width: "100%" }}>
                                <View style={{ display: "flex", flexDirection: "row", alignItems: 'center', width: "100%", marginTop: 25 }}>
                                    <View style={{ flexDirection: "row", width: '10%' }}>
                                        {/* <AntDesign name="hearto" size={24} color="#4F6DFF" /> */}
                                    </View>
                                    <View style={{ flexDirection: "row", width: '90%' }}>
                                        <Text style={{ fontSize: 16, fontWeight: "500", color: "#000000" }}>Liked Products</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={profile} style={{ display: "flex", flexDirection: "row", alignItems: 'center', width: "100%", marginTop: 25 }}>
                                <View style={{ display: "flex", flexDirection: "row", alignItems: 'center', width: "100%" }}>
                                    <View style={{ flexDirection: "row", width: '10%' }}>
                                        {/* <AntDesign name="profile" size={24} color="#4F6DFF" /> */}
                                    </View>
                                    <View style={{ flexDirection: "row", width: '90%' }}>
                                        <Text style={{ fontSize: 16, fontWeight: "500", color: "#000000" }}>Profile Setting</Text>
                                    </View>
                                    <View style={{ position: "absolute", right: 0, alignContent: 'center', justifyContent: 'center' }}>
                                        <View style={{ alignItems: 'flex-end', alignItems: 'center', justifyContent: 'center', width: 30, height: 30, borderRadius: "50" }}>
                                            {/* <AnimatedCircularProgress
                                                size={33}
                                                width={4}
                                                fill={70}
                                                tintColor="#00e0ff"
                                                backgroundColor="#3d5875" /> */}
                                            <Text style={{ position: "absolute", fontSize: 10, fontWeight: 'bold' }}>70%</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={Setting} style={{ display: "flex", flexDirection: "row", alignItems: 'center', width: "100%" }}>
                                <View style={{ display: "flex", flexDirection: "row", alignItems: 'center', width: "100%", marginTop: 25 }}>
                                    <View style={{ flexDirection: "row", width: '10%' }}>
                                        {/* <AntDesign name="setting" size={24} color="#4F6DFF" /> */}
                                    </View>
                                    <View style={{ flexDirection: "row", width: '90%' }}>
                                        <Text style={{ fontSize: 16, fontWeight: "500", color: "#000000" }}>Setting</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={qa} style={{ display: "flex", flexDirection: "row", alignItems: 'center', width: "100%" }}>
                                <View style={{ display: "flex", flexDirection: "row", alignItems: 'center', width: "100%", marginTop: 25 }}>
                                    <View style={{ flexDirection: "row", width: '10%' }}>
                                        {/* <AntDesign name="question" size={24} color="#4F6DFF" /> */}
                                    </View>
                                    <View style={{ flexDirection: "row", width: '90%' }}>
                                        <Text style={{ fontSize: 16, fontWeight: "500", color: "#000000" }}>Q&A</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={AboutPage} style={{ display: "flex", flexDirection: "row", alignItems: 'center', width: "100%" }}>
                                <View style={{ display: "flex", flexDirection: "row", alignItems: 'center', width: "100%", marginTop: 25 }}>
                                    <View style={{ flexDirection: "row", width: '10%' }}>
                                        {/* <AntDesign name="contacts" size={24} color="#4F6DFF" /> */}
                                    </View>
                                    <View style={{ flexDirection: "row", width: '90%' }}>
                                        <Text style={{ fontSize: 16, fontWeight: "500", color: "#000000" }}>About</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={Signout} style={{ display: "flex", flexDirection: "row", alignItems: 'center', width: "100%" }}>
                                <View style={{ display: "flex", flexDirection: "row", alignItems: 'center', width: "100%", marginTop: 25 }}>
                                    <View style={{ flexDirection: "row", width: '10%' }}>
                                        {/* <AntDesign name="login" size={24} color="#4F6DFF" /> */}
                                    </View>
                                    <View style={{ flexDirection: "row", width: '90%' }}>
                                        <Text style={{ fontSize: 16, fontWeight: "500", color: "#000000" }}>Sign out</Text>
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