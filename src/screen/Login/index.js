import React, { useEffect, useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, BackHandler, ScrollView, Alert } from 'react-native';
import Styles from './indexStyle';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
        toaster.show({ type: "success", message: ' login SuccessFully...', position: "bottom" })
        props.navigation.navigate('BottomTabNavigation');
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
        else if (password !== '123') {
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

                    <View style={Styles.InputView1}>
                        <TextInput
                            placeholder="example@gmail.com"
                            autoFocus={true}
                            onChangeText={(text) => {
                                setEmail(text);
                            }}
                            value={email}
                        />
                        {(email.match(regexEmail)) ? (<View>
                            <FontAwesome name="check" size={20} color="#000000 " />

                        </View>
                        ) : null}
                    </View>

                    <Text style={Styles.passText} >Password</Text>
                    <View style={Styles.InputView1}>
                        <TextInput
                            placeholder="**************"
                            autoFocus={true}
                            secureTextEntry={showpassword}
                            onChangeText={(text) => {
                                setPassword(text);
                            }}
                            value={password}
                            
                        />
                        {passwordValue.length == 0 ? (null) : (<TouchableOpacity onPress={() => setShowpassword(!showpassword)}><View>
                            <FontAwesome name="check" size={20} color="#000000 " />

                        </View></TouchableOpacity>)}

                    </View>
                </View>
                <LinearGradient style={Styles.LinearGradientButton}
                    start={{ x: 0.0, y: 0.5 }}
                    end={{ x: 0.5, y: 1.0 }}
                    locations={[0, 1]}
                    colors={['#4E6CFF', '#7B9AFF']}>

                    <TouchableOpacity style={Styles.loginButton1} onPress={goToDashboard}>
                        <Text style={Styles.loginButton1Text}>Login</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <View style={Styles.orView}>
                    <View style={Styles.orViewBorder} />
                    <View>
                        <Text style={Styles.orViewText}>or</Text>
                    </View>
                    <View style={Styles.orViewBorder} />
                </View>
                <View>
                </View>
                <View style={Styles.BorderbottomOr}>

                </View>
                <View style={Styles.IconConteniar}>
                    <View style={Styles.IconConteniar2}>
                        <View>
                            <TouchableOpacity style={Styles.FaceBookView}>

                                <Icon style={Styles.FaceBookIcon} name="facebook" size={30} color="#3B5998" />
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.SubIconView}>


                             <TouchableOpacity style={Styles.Google}>

                                <Image style={Styles.googleImage} source={require('../../assets/Images/google.png')} />
                            </TouchableOpacity> 
                            <TouchableOpacity style={Styles.apple}>
                              
                                <FontAwesome name="apple" size={30} color="#000000 " />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={Styles.signInButton}>
                    <TouchableOpacity onPress={goToSignIn}>
                        <Text style={Styles.signInText}>Create New Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView >
    )
}

export default Login;
