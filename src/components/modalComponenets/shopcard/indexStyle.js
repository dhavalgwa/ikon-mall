import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    shopContainer: {
        width: '25%',
        padding: 5,
    },
    shopCardView: {
        height: '100%',
        borderRadius: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    imageView: {
        alignItems: 'center',

    },
    image: {
        height: 100,
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        resizeMode: 'stretch'
    },
    descriptionView: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 7,
        paddingBottom: 10,
        width: 140,
        backgroundColor: 'white',
    },
    description: {
        width: '90%',
    },
    shopNameText: {
        fontWeight: 'bold',
        fontSize: 13,
    },
    timeView: {
        flexDirection: 'row',
        paddingLeft: 11,
        paddingTop: 6,
        paddingBottom: 6,
        // backgroundColor: 'red',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginTop: 2,
        alignContent: 'center'
    },
    timeText: {
        height: "15%",
        width: "100%",
        display: "flex",
        backgroundColor: "red",
        fontSize: 10,
        fontWeight: 'bold'
    }, contener: {
        marginTop: 10
    }, cardContener: {
        height: 210, width: 170, borderRadius: 20, marginLeft: 15
    }, ImageView: {
        display: "flex", justifyContent: "space-between"
    }, Image: {
        height: 105, width: 170, position: "relative", borderTopLeftRadius: 10, borderTopRightRadius: 10
    }, timeTextcontener: {
        position: "absolute", height: "100%", width: "100%", display: "flex", justifyContent: "flex-end", alignItems: "flex-end"
    }, timeText1: {
        color: "white", fontWeight: 'bold'
    },
    logoView: {
        position: "absolute", height: "100%", width: "100%", display: "flex", justifyContent: "flex-end", alignItems: "baseline"
    }, logo: {
        height: 35, width: 35, left: 15, top: 12
    }, shopNameContenaer: {
        marginTop: 10, height: 105, width: "100%", display: "flex", backgroundColor: " #F3F3F0", borderBottomLeftRadius: 10, borderBottomRightRadius: 10
    }, shopnamesubContener: {
        display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 10
    }, ShopNameText: {
        justifyContent: "flex-start", alignItems: "baseline", marginLeft: 13, fontWeight: "bold"
    }, RatingsContener: {
        flexDirection: "row", justifyContent: "space-evenly"
    }, ratingsImage: {
        height: 20, width: 20, bottom: 2
    }, addressConter: {
        display: "flex", flexDirection: "row", marginTop: 10
    }, addressImage: {
        height: 20, width: 20, marginLeft: 10
    }, addressText: {
        marginLeft: 10, width: "75%"
    }
})

export default Styles;