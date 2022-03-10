import { StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

const Styles = StyleSheet.create({
    container: {
        height: 200,
    },
    nameContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContainer: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 20,
        padding: 15,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#B6E1E7'
    },
    mainContener: {
        alignItems: 'center',
        backgroundColor: 'white',
        height: height
    },
    ScrollView: {
        width: '95%'
    }, nameImageContener: {
        height: 200, width: '100%'
    }, cardSubContaier: {
        width: "100%"
    }, orderHistoryContenerTouch: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        width: "100%"
    }, orderHistoryContenerView: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        width: "100%"
    }, orderHistoryIcon: {
        flexDirection: "row",
        width: '10%'
    },
    orderHistoryContenerText: {
        flexDirection: "row",
        width: '90%'
    },
    orderHistoryText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#000000"
    },
    orderHistoryDisplayContenair: {
        position: "absolute",
        right: 0,
        alignContent: 'center',
        justifyContent: 'center'
    }, orderHistoryDisplay: {
        alignItems: 'flex-end',
        backgroundColor: '#7A99FF',
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        borderRadius: 50
    }, orderHistoryDisplayText: {
        color: "white",
        fontWeight: "700",
        fontSize: 18,
        color: "white",
        position: 'relative',
    }, likedContenerTouch: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        width: "100%"
    }, likedContenerView: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        width: "100%",
        marginTop: 25
    }, likeIcon: {
        flexDirection: "row",
        width: '10%'
    }, likeTextView: {
        flexDirection: "row",
        width: '90%'
    }, liketext: {
        fontSize: 16,
        fontWeight: "500",
        color: "#000000"
    }, TouchableOpacitys: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        width: "100%"
    }, profileSettingContener: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        width: "100%",
        marginTop: 25
    }, containerView: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        width: "100%",
        marginTop: 25
    }, Views: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        width: "100%",
        marginTop: 25
    }, Icons: {
        flexDirection: "row",
        width: '10%'
    }, Texts: {
        flexDirection: "row",
        width: '90%'
    }, text: {
        fontSize: 16,
        fontWeight: "500",
        color: "#000000"
    }, profileSettingContenerView: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        width: "100%"
    }, prifileIcon: {
        flexDirection: "row",
        width: '10%'
    }, profileTextContener: {
        flexDirection: "row",
        width: '90%'
    }, profileText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#000000"
    }, animatedContener: {
        position: "absolute",
        right: 0,
        alignContent: 'center',
        justifyContent: 'center'
    }, animated: {
        alignItems: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        width: 30, height: 30,
        borderRadius: 50
    }, animatedText: {
        position: "absolute",
         fontSize: 10,
          fontWeight: 'bold'
    }

});

export default Styles;