import { StyleSheet, Dimensions } from 'react-native';
import { Color } from '../../constant/Constant';
const { height } = Dimensions.get('window');

const Styles = StyleSheet.create({
    contener: {
        justifyContent: "center", alignItems: "center", height: height / 1.2
    },
    liner: {
        height: 49
    }, rounded: {
        height: 60, width: 60
    }, textBox: {
        marginTop: 15
    }, text: {
        fontSize: 24,
        fontWeight: "700",
        textAlign: "center"

    }, textbox2: {
        width: "95%",
        marginLeft: 10
    }, text2: {
        color: "#666666"
    }, linerConterner: {
        marginTop: "20%",
        width: "90%",
        marginLeft: 18
    }, linerdata: {
        height: 49

    }, button: {
        alignItems: "center", justifyContent: "center", flex: 1,

    }, buttonText: {
        fontSize: 18, fontWeight: "700", color: "#FFFFFF"

    }

});

export default Styles;