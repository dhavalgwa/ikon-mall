import React, { useEffect, useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, BackHandler, ScrollView, Alert } from 'react-native';
import Styles from './indexStyle';
// import { FontAwesome5 } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';
import LinearGradient from 'react-native-linear-gradient';
// import { Foundation } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';
import { connect } from "react-redux";
import { useToast } from 'react-native-paper-toast';


const Login = (props) => {
    const toaster = useToast();
    const [email, setEmail] = useState('');
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    urlPatternValidation = URL => {
        const regex = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]");
        return regex.test(email);
    };
    const [password, setPassword] = useState('');
    var passwordValue = password
    const [showpassword, setShowpassword] = useState(true)
    useEffect(() => {
        const backAction = () => {
            props.navigation.navigate('Home');
            return true;
        };
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => backHandler.remove();
    }, []);
    const goToSignIn = () => {
        props.navigation.navigate('Signup')
    }
    const goToDashboard = () => {
        if (!email) {
            toaster.show({ type: "error", message: "Email Can not Blank!!", position: "bottom" })
            return false;

        } else if (!password) {
            toaster.show({ type: "error", message: "Password Can not blank!!", position: "bottom" })
            return false;
        }
        else if (email !== 'developer@gmail.com') {
            toaster.show({ type: "error", message: 'Invalid Email!!!', position: "bottom" })
            return false
        }
        else if (password !== '123456') {
            toaster.show({ type: "error", message: 'Invalid Password!!', position: "bottom" })
            return false;
        }
        else {
            toaster.show({ type: "success", message: ' login SuccessFully...', position: "bottom" })
            props.navigation.navigate('BottomTabNavigation');
        }

    }
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <View style={Styles.loginContainer}>
                <View style={Styles.iconView}>
                    <Image style={Styles.image} source={require('../../assets/Images/Splash.png')} />
                </View>
                <View style={Styles.welcomeText}>
                    <Text style={Styles.wlcTitle} >Welcome !</Text>
                    <Text>Please Login or Sign up to continue our app</Text>
                </View>
                <View style={Styles.inputView}>
                    <Text style={Styles.emailText} >Email</Text>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, borderColor: "#e3e6e8" }}>
                        <TextInput
                            placeholder="example@gmail.com"
                            autoFocus={true}
                            onChangeText={(text) => {
                                setEmail(text);
                            }}
                            value={email}
                        />
                        {(email.match(regexEmail)) ? (<View>
                            <View style={{ backgroundColor: "#4E6CFF", height: 22, width: 22, borderRadius: 50 }}></View>
                            {/* <Feather style={{ position: "absolute" }} name="check" size={20} color="white" /> */}
                        </View>) : null
                        }

                    </View>

                    <Text style={Styles.passText} >Password</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, borderColor: "#e3e6e8" }}>
                        <TextInput
                            placeholder="**************"
                            secureTextEntry={showpassword}
                            onChangeText={(text) => {
                                setPassword(text);
                            }}
                            value={password}
                        />
                        {passwordValue.length == 6 ? (<TouchableOpacity onPress={() => setShowpassword(!showpassword)}><View>
                            <View style={{ backgroundColor: "#4E6CFF", height: 22, width: 22, borderRadius: 50 }}></View>
                            {/* <Feather style={{ position: "absolute" }} name="check" size={20} color="white" /> */}
                        </View></TouchableOpacity>) : null}

                    </View>
                </View >
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={["#4E6CFF", "#7B9AFF"]}
                    style={{ height: 49 }}
                >
                    <TouchableOpacity style={{ flex: 1, alignItems: "center", justifyContent: "center" }} onPress={goToDashboard}>
                        <Text style={{ fontSize: 25, fontWeight: "700", color: "#FFFFFF" }}>Login</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: "89%", marginTop: 10 }}>
                    <View style={{ flex: 1, borderBottomWidth: 1, borderColor: "#e3e6e8" }} />
                    <View>
                        <Text style={{ width: 25, textAlign: 'center', fontWeight: "bold" }}>or</Text>
                    </View>
                    <View style={{ flex: 1, borderBottomWidth: 1, borderColor: "#e3e6e8" }} />
                </View>
                <View>
                </View>
                <View style={{ borderBottomWidth: 1, borderColor: "e3e6e8" }}>

                </View>
                <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 10, paddingTop: 20, paddingBottom: 20 }}>
                    {/* <TouchableOpacity>
                        <FontAwesome5 name="facebook" size={40} color="#3B5998" />
                    </TouchableOpacity> */}
                    <TouchableOpacity>
                        <Image style={{ height: 40, width: 40 }} source={require('../../assets/Images/google.png')} />
                    </TouchableOpacity>
                    {/* <TouchableOpacity>
                        <Foundation size={50} color="black" name="social-apple" />
                    </TouchableOpacity> */}
                </View>
                {/* <View style={{ height: "9%", width: "100%", borderRadius: 25, marginTop: 10,alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ alignItems: "center", justifyContent: "center", flexDirection: "row", justifyContent: 'space-between', width: "90%", backgroundColor: 'red' }}>
                        <View>
                            <TouchableOpacity style={{ height: 50, width: 50, backgroundColor: "white", borderRadius: 25, }}>
                                <FontAwesome5 style={{ borderRadius: 20, marginLeft: 4.5, marginTop: 2.7 }} name="facebook" size={40} color="#3B5998" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", width: "55%", marginRight: 22 }}>
                            <TouchableOpacity>
                                <View style={{ height: 50, width: 50, backgroundColor: "white", borderRadius: 25 }}>
                                </View>
                                <Image style={{ height: 40, width: 40, position: "absolute", marginLeft: 5, marginTop: 5 }} source={require('../../assets/Images/google.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{ height: 55, width: 55, backgroundColor: "white", borderRadius: 25, justifyContent: "center", alignContent: "center" }}>
                                </View>
                                <Foundation style={{ borderRadius: 20, position: "absolute", marginLeft: 9, marginTop: 2 }} size={50} color="black" name="social-apple" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View> */}
                <View style={{ marginTop: 10 }}>
                    <TouchableOpacity onPress={goToSignIn}>
                        <Text style={{ color: "#516FFF", fontSize: 14 }}>Create New Account</Text>
                    </TouchableOpacity>
                </View>
            </View >
        </ScrollView >
    )
}

Login.propTypes = {};
Login.defaultProps = {};

const actionCreators = {};

export default connect(
    ({ fetchData }) => ({
        fetchData,
    }),
    actionCreators
)(Login);