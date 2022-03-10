import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    contenar: {
        width: '100%',
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 37,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#9edcea75"

    },
    subContenar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '97%',
        height: 55
    },
    TextView: {
        width: '18%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    BlanceText: {
        color: '#333232',
        fontFamily: "Montserrat"
    },
    BlanceText: {
        color: '#333232',
        fontFamily: "Montserrat"
    },
    buttonContener: {
        flexDirection: 'row',
        width: '46%',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    ButtonColor: {
        backgroundColor: '#4F6DFF',
        width: 32,
        height: 10,
        borderRadius: 10
    }, ButtonWithOutColor: {
        backgroundColor: 'grey',
        width: 32,
        height: 10,
        borderRadius: 10
    }, ballTextView: {
        width: '18%',
        alignItems: 'center',
        justifyContent: 'center'
    }, ballText: {
        color: '#333232',
        // fontWeight: '389'
    }, CartView: {
        width: '18%',
        alignItems: 'center',
        justifyContent: 'center'
    }, cartTouch: {
        backgroundColor: 'white',
        width: '70%',
        height: 55,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }, image: {
        height: 20, width: 20

    }

});

export default Styles;