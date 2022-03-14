import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';
import Styles from './indexStyle';

const SignIn = (props) => {
    const [showPassword, setshowPassword] = useState(true);
    const [phoneNumber, setphoneNumber] = useState();
    const [password, setPassword] = useState();
    const show = () => {
        setshowPassword(!showPassword);
    };
    const navigatesignup = () => {
        props.navigation.navigate('Signup');
    };
    const gotoDashbord = () => {
        props.navigation.navigate('BottomTabNavigation');
        // if (phoneNumber == '1234567890' || password == 'developer@123') {
        //     props.navigation.navigate('BottomTabNavigation');
        // } else {
        //     Alert.alert('enter the correct password');
        // }
    };
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            {/* {fIRST title} */}
            <View style={Styles.container}>
                <View style={Styles.title}>
                    <Text style={Styles.titleText}>IkonMall</Text>
                    <TouchableOpacity onPress={navigatesignup}>
                        <Text style={Styles.signupText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* {Second Image} */}
            <View style={Styles.containerImage}>
                <View style={Styles.containerImage1}>
                    <Image source={require('../../assets/Images/signinpage.png')} style={Styles.Image} />
                </View>
            </View>
            {/* {Input or Button} */}
            <View style={Styles.containerInput}>
                <View style={Styles.signin}>
                    <Text style={Styles.signinText}>Sign In</Text>
                </View>
                <View style={Styles.containerPhoneNumber}>
                    <Text style={Styles.containerPhoneNumberText}>Phone Number</Text>
                    <TextInput
                        keyboardType='numeric'
                        style={Styles.containerPhoneNumberInput}
                        placeholder="+919909474248"
                        onChangeText={(text) => setphoneNumber(text)}
                    />
                </View>
                <View style={Styles.containerPassword}>
                    <View>
                        <Text style={Styles.containerPasswordText}>Password</Text>
                    </View>
                    <TouchableOpacity style={Styles.containerPasswordIcon} onPress={show}>
                        {/* <AntDesign name="eye" size={24} color="black" /> */}
                    </TouchableOpacity>
                    <TextInput
                        secureTextEntry={showPassword}
                        style={Styles.containerPasswordInput}
                        placeholder="************"
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>
                <TouchableOpacity style={Styles.forgotpassword}>
                    <Text>
                        {/* <Entypo name="lock" size={24} style={Styles.forgotpasswordIcon} /> */}
                    </Text>
                    <Text style={Styles.forgotpasswordText}>Forgot Password</Text>
                </TouchableOpacity>
                {/* {Buttoon} */}
                <View style={Styles.Button}>
                    <TouchableOpacity onPress={gotoDashbord} style={Styles.ButtonImagecontainer}>
                        <Image source={require('../../assets/Images/signIn.png')} style={Styles.ImageButton} />
                    </TouchableOpacity>
                    <View style={Styles.loginwithIcons}>
                        <View style={Styles.ButtonIcon}>
                            <TouchableOpacity>
                                <Text style={Styles.ButtonIconText}>Login with</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.buttonIconIcon}>
                            <TouchableOpacity>
                                {/* <AntDesign name="google" size={24} color="#88887E" /> */}
                            </TouchableOpacity>
                            <TouchableOpacity>
                                {/* <AntDesign name="apple1" size={24} color="#88887E" /> */}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};
export default SignIn;