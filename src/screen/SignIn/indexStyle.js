import { StyleSheet, Dimensions } from 'react-native';
import { Color } from '../../constant/Constant';

const { height } = Dimensions.get('window');

const Styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        height: height / 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '95%',

    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 20,
        // marginLeft: 21,
    },
    signupText: {
        color: Color.green,
        fontSize: 18,
    },
    containerImage: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerImage1: {
        height: 250,
    },
    Image: {
        height: 200,
    },
    containerInput: {
        height: height / 1.8,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: 'white'
    },
    signin: {
        width: '95%',
        height: height / 8,
        marginLeft: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    signinText: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    containerPhoneNumber: {
        width: '90%',
        height: 76,
        marginLeft: 20,
    },
    containerPhoneNumberText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    containerPhoneNumberInput: {
        color: 'black',
        fontSize: 14,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
    },
    containerPassword: {
        height: 76,
        marginLeft: 20,
    },
    containerPasswordText: {
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 3,
    },
    containerPasswordIcon: {
        width: '95%',
        flexDirection: 'row-reverse',
        marginTop: -15,
    },
    containerPasswordInput: {
        color: 'black',
        fontSize: 14,
        borderBottomColor: 'black',
        marginBottom: 10,
    },
    forgotpassword: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 20,
    },
    forgotpasswordIcon: {
        marginBottom: 5,
        color: '#0ABC48',
    },
    forgotpasswordText: {
        color: '#0ABC48',
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 10,
    },
    Button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 100,
        width: '100%',
        alignItems: 'center',
        marginTop: height / 15
    },
    ButtonImagecontainer: {
        backgroundColor: Color.green,
        height: 50,
        width: '37%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginLeft: 20,
    },
    ImageButton: {
        height: 25,
        width: 110,
    },
    ButtonIcon: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    buttonIconIcon: {
        width: '25%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ButtonIconText: {
        fontSize: 18,
        color: '#88887E',
    },
    loginwithIcons: {
        flexDirection: 'row',
        height: 50,
        width: '50%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F3F3F0',
        marginRight: 20,
    },
})
export default Styles