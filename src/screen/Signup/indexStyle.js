import { StyleSheet, Dimensions } from 'react-native';

import { Color } from '../../constant/Constant';
import { Fonts } from '../../constant/Constant';

const height = Dimensions.get("window").height;
const width = Dimensions.get("screen").width;

const Styles = StyleSheet.create({
    loginContainer: {
        alignItems: 'center',
        height: height,
        width: width,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'center'
    },
    iconView: {
        width: width,
        alignItems: 'center',
        height: height /4,
        justifyContent: 'center',
    },
    welcomeText: {
        width: width / 1.1,
        padding: 10
    },
    wlcTitle: {
        fontSize: 20,
        fontWeight: '300'
    },
    inputView: {
        width: width / 1.1,
        height: height/2.1,
        justifyContent: 'center',
        padding: 10,
        marginTop: 30
    },
    emailText: {
        fontWeight: '600',
        fontSize: Fonts.label
    },
    passText: {
        fontWeight: '600',
        fontSize: Fonts.label,
        marginTop: 12
    },
    Input: {
        height: '30%',
        fontSize: 15
    },
   
    loginButton: {
        backgroundColor: Color.primary,
        justifyContent: 'center',
        width: '100%',
        height: '40%',
        borderRadius: 20
    },
    loginText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    facebookLoginButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Color.facebook,
        justifyContent: 'center',
        width: '80%',
        height: '7%',
        borderRadius: 20
    },
    facebookLoginText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    },
    facebookLoginTextBold: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    loginWithGoogle: {
        flexDirection: 'row',
        width: width / 1.1,
        height: height / 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#E2E2E2',
        borderWidth: 1,
        borderRadius: 10
    },
    loginWithApple: {
        flexDirection: 'row',
        width: width / 1.1,
        height: height / 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#E2E2E2',
        borderWidth: 1,
        borderRadius: 10
    },
    googleAppleContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width / 1.1,
        height: height / 7,
        padding: 10,
        marginTop: 40,
    }
})

export default Styles;