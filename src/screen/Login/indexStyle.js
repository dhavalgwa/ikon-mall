import { StyleSheet, Dimensions } from 'react-native';

import { Color } from '../../constant/Constant';
import { Fonts } from '../../constant/Constant';

const height = Dimensions.get("window").height;
const width = Dimensions.get("screen").width;

const Styles = StyleSheet.create({
    loginContainer: {
        alignItems: 'center',
        justifyContent: 'center',
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
        height: height / 4.5,
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
        height: height / 6,
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
        justifyContent: 'center',
        width: '100%',
        height: '50%',
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
        width: '100%',
        height: '50%',

        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#E2E2E2',
        borderWidth: 1,
        borderRadius: 20
    },
    loginWithApple: {
        marginTop: 10,
        flexDirection: 'row',
        width: '100%',

        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#E2E2E2',
        borderWidth: 1,
        borderRadius: 20,
        height: '50%',

    },
    googleAppleContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width / 1.1,
        height: '17%',
        padding: 10,
        marginTop: 40,
    }
})

export default Styles;