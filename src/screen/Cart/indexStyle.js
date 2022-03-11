import { StyleSheet, Dimensions } from 'react-native';
import { Color } from '../../constant/Constant';
import { Fonts } from '../../constant/Constant';
const height = Dimensions.get("window").height;
const width = Dimensions.get("screen").width;

const Styles = StyleSheet.create({
    Contener: {
        height: "10%",
        justifyContent: "center",
        alignItems: "center"

    },
    myOrderTextContener: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        height: "7%",
        width: "90%",
        marginLeft: 16,
        marginTop: 20

    },
    myOrderText: {
        fontWeight: "500",
        fontSize: 20
    },
    Discount: {
        color: "#DE1F36"
    }, mapView: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center'
    }, subMapView: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 10,
        justifyContent: "space-between",
        width: "95%",
        margin: 5,
        padding: 5

    }, ImageView: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    }, image: {
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        width: 100,

    }, SubMapView2: {
        backgroundColor: "white",
        width: "65%"
    },
    productView: {
        marginLeft: 10,
        paddingTop: 10

    },
    productText: {
        fontWeight: "400",
        fontSize: 14,

    },
    categoryText: {
        fontWeight: "400",
        fontSize: 14,
        paddingTop: 3

    },
    price: {
        flexDirection: "row",
        paddingTop: 5

    },
    CostPrice: {
        fontSize: 16,
        fontWeight: "700",

    },
    mrp: {
        textDecorationStyle: "solid",
        textDecorationLine: "line-through",
        fontSize: 14,
        fontWeight: "400",
        marginLeft: 8

    },
    sellerPrice: {
        color: "red",
        fontSize: 14,
        fontWeight: "400",
        marginLeft: 8

    },
    button: {
        flexDirection: "row",
        paddingTop: 10,
        justifyContent: 'space-between',
        width: "100%"
    },
    subButton: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    deleteButton: {
        height: 35,
        width: 35,
        backgroundColor: "#4E6CFF",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    minusButton: {
        height: 35,
        width: 35,
        backgroundColor: "#7B9AFF",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    qty: {
        fontSize: 21,
        marginLeft: 10,
        marginRight: 10
    },
    plusButton: {
        height: 35,
        width: 35,
        backgroundColor: "#7B9AFF",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    deleteButton2: {
        height: 35,
        width: 35,
        backgroundColor: "#4E6CFF",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainButton: {
        backgroundColor: "white",
        height: "15%",
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center"
    },
    totalButton: {
        marginLeft: 10
    },
    ButtonText: {
        fontWeight: "400",
        fontSize: 18,
        color: "#5270FF"
    },
    valueDispaly: {
        fontWeight: "bold",
        fontSize: 24
    },
    checkoutButton: {
        marginRight: 10,
    },
    LinearGradients: {
        borderRadius: 25
    },
    checkout: {
        height: 60,
        width: 175,
        borderRadius: 25,
        display: "flex",
        justifyContent: 'center',
        alignItems: "center"
    },
    checkoutText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    }

})

export default Styles;