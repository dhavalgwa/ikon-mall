import React, { useEffect, useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, BackHandler, ScrollView, Alert } from 'react-native';
import Styles from './indexStyle';
// import { Feather } from '@expo/vector-icons';
import LinearGradient from 'react-native-linear-gradient';
// import { Checkbox } from 'react-native-paper';
// import { Ionicons } from '@expo/vector-icons';
import { useToast } from 'react-native-paper-toast';
const Signup = (props) => {
    const toaster = useToast();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Cpassword, setCPassword] = useState('');
    const [userName, setuserName] = useState('');
    const [showpassword, setShowpassword] = useState(true)
    const [showcpassword, setcShowpassword] = useState(true)
    const [checked, setChecked] = React.useState(false)
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
    const goToLogin = () => {
        props.navigation.navigate('Login');
    }
    const goToSucess = () => {
        if (!email) {
            toaster.show({ type: "error", message: "Email Can not Blank!!", position: "bottom" })
            return false;
        } else if (!password) {
            toaster.show({ type: "error", message: "Password Can not blank!!", position: "bottom" })
            return false;
        } else if (!Cpassword) {
            toaster.show({ type: "error", message: "Password Can not blank!!", position: "bottom" })
            return false;
        }
        else if (email !== 'developer@gmail.com') {
            toaster.show({ type: "error", message: "'Invalid Email!!!'", position: "bottom" })
            return false
        }
        else if (password !== '123') {
            toaster.show({ type: "error", message: 'Invalid Password!!', position: "bottom" })
            return false;
        }
        else if (Cpassword !== '123') {
            toaster.show({ type: "error", message: 'Invalid Password!!', position: "bottom" })
            return false;
        }
        else if (Cpassword !== password) {
            toaster.show({ type: "error", message: "Password not Match!!!", position: "bottom" })
            return false;
        }
        else {
            toaster.show({ type: "success", message: "sucessfully Signup", position: "bottom" })
            props.navigation.navigate('Success');
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
                    <Text style={Styles.welcomeTextSignUp} >Sign up</Text>
                    <Text style={Styles.welcomeTextAccount}>Create an New Account</Text>
                </View>
                <View style={Styles.inputView}>
                    <Text style={Styles.label} >Username</Text>
                    <View style={Styles.InputContener}>
                        <TextInput style={Styles.Input1}
                            placeholder="example"
                            autoFocus={true}
                            onChangeText={(text) => {
                                setuserName(text);
                            }}
                            value={userName}
                        />
                        {/* {(!userName) ? (null) : (<View>
                            <View style={Styles.userNameicon}></View>
                            <Feather style={{ position: "absolute" }} name="check" size={20} color="white" />
                        </View>)} */}
                    </View>
                    <Text style={Styles.label} >Email</Text>
                    <View style={Styles.InputContener}>
                        <TextInput
                            style={Styles.Input1}
                            placeholder="example@gmail.com"
                            autoFocus={true}
                            onChangeText={(text) => {
                                setEmail(text);
                            }}
                            value={email}
                        />
                    </View>
                    <Text style={Styles.label}  >Password</Text>
                    <View style={Styles.InputContener}>
                        <TextInput
                            style={Styles.Input1}
                            placeholder="**************"
                            autoFocus={true}
                            secureTextEntry={showpassword}
                            onChangeText={(text) => {
                                setPassword(text);
                            }}
                            value={password}
                        />
                        {/* {(!password) ? (null) : (<TouchableOpacity>
                            <Ionicons name="eye-off" size={24} color="#4E6CFF" onPress={() => setShowpassword(!showpassword)} />
                        </TouchableOpacity>)} */}
                    </View>
                    <Text style={Styles.label}  >Confirm Password</Text>
                    <View style={Styles.InputContener}>
                        <TextInput
                            style={Styles.Input1}
                            placeholder="**************"
                            autoFocus={true}
                            secureTextEntry={showcpassword}
                            onChangeText={(text) => {
                                setCPassword(text);
                            }}
                            value={Cpassword}
                        />
                        {(!Cpassword) ? (null) : (<TouchableOpacity>
                            {/* <Ionicons name="eye-off" size={24} color="#4E6CFF" onPress={() => setcShowpassword(!showcpassword)} /> */}
                        </TouchableOpacity>)
                        }
                    </View>
                    <View style={Styles.Checkbox}>
                        {/* <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                            color={'#4E6CFF'}
                            uncheckColor={'red'}
                        /> */}
                        <View style={Styles.CheckBoxTextView}>
                            <Text style={Styles.CheckBoxText} >
                                By Creating an  Account you have to agree with our them & condication
                            </Text>
                        </View>
                    </View>
                </View>
                <LinearGradient style={Styles.LinearGradientButton}
                    start={{ x: 0.0, y: 0.5 }}
                    end={{ x: 0.5, y: 1.0 }}
                    locations={[0, 1]}
                    colors={['#4E6CFF', '#7B9AFF']}>
                    <TouchableOpacity style={Styles.Signup} onPress={goToSucess}>
                        <Text style={Styles.SignupText}>Signup</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <View >
                    <TouchableOpacity onPress={goToLogin}>
                        <Text style={{ color: "#516FFF", fontSize: 14 }}>Return To Login</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </ScrollView >
    )
}

export default Signup;
