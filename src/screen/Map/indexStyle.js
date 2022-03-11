import { StyleSheet, Dimensions } from 'react-native';
import { Color } from '../../constant/Constant';
import { Fonts } from '../../constant/Constant';
const height = Dimensions.get("window").height;
const width = Dimensions.get("screen").width;

const Styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    modalView: {
        height: 400,
        width: "100%",
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 25,
        padding: 10,
        elevation: 2,
        margin: 12,
        height: 50

    },
    buttonOpen: {
        backgroundColor: "#45A524",
        // height:50,
        margin: 10
    },
    buttonClose: {
        backgroundColor: "#45A524",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20
    },
    modalText: {

        borderColor: '#666',
        backgroundColor: '#FFF',
        borderWidth: 1,
    }, mapview: {
        alignSelf: 'stretch', height: '100%'

    }, modalview: {
        position: "absolute", display: "flex", height: "15%", width: "95%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginLeft: 10
    }, subModleView: {
        display: "flex", justifyContent: "space-between", width: "100%"
    }, serchbar: {
        marginTop: 10
    }

})

export default Styles;