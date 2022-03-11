import { StyleSheet } from 'react-native';
import { Color } from '../../constant/Constant';

const Styles = StyleSheet.create({
    contener: {
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 450,
        marginTop: height / 2.1
    }, modal: {
        flexDirection: "row",
        justifyContent: "flex-end",
        width: "90%"
    }, subContener: {
        width: '90%',
        height: 400
    }, sortByPrice: {
        width: '100%', height: 80
    }, sortText: {
        color: Color.darkWiteColor,
        fontSize: 15
    }, dollerText: {
        fontWeight: 'bold', fontSize: 25
    }, sortbycontener: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#E9E9E6'
    },
    sortlow: {
        flexDirection: 'row', justifyContent: 'space-between', width: '95%'

    }, sortLOWTouch: {
        backgroundColor: "#4F6DFF",
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 10
    }, sortHighTouch: {
        backgroundColor: Color.categoryButtonColor,
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 10
    },
    button: {
        width: '100%',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center'

    }, buttonTouch: {
        width: '95%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    }, buttonText: {
        fontWeight: 'bold', fontSize: 20, color: 'white'
    }

});

export default Styles;