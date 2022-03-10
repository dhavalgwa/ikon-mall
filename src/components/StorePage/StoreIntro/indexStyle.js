import { StyleSheet, Dimensions } from 'react-native';
import { Color } from '../../../constant/Constant';

const height = Dimensions.get("screen").height;

const Styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    backgroundImageView: {
        width: '100%'
    },
    image: {
        height: 220,
        width: "100%"
    },
    storeIntroContainer: {
        position: 'absolute',
        paddingTop: 20,
        height: '100%',
        width: '100%',
        alignItems: 'center',
    },
    nameLableContainer: {
        flexDirection: 'row',
        height: '50%',
        width: '95%'
    },
    nameLabelView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '100%',
        width: '70%'
    },
    imageView: {
        height: '100%',
        width: "30%",
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    bgImage: {
        height: 50,
        width: 50,
    },
    descriptionView: {
        height: '100%',
        justifyContent: 'center',
        width: "70%"
    },
    nameView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    nameText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    timeText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 14
    },
    notificationView: {
        height: '100%',
        width: '30%',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    notiFication: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 5
    },
    ratingView: {
        height: '25%',
        width: '95%',
    },
    blureImage: {
        height: 50,
        width: 100,
        borderRadius: 10
    },
    blureContainView: {
        position: 'absolute',
        height: 50,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    blureView: {
        flexDirection: 'row',
        width: 100,
        justifyContent: 'center'
    },
    blureRatingText: {
        textAlign: 'center',
        color: 'white'
    },
    marketInfoOrderProcessContainer: {
        height: '25%',
        width: '95%',
        position: 'absolute',
        marginTop: height / 4.2,
    },
    marketInfoOrderProcessView: {
        flexDirection: 'row',
        height: 55,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 20,
    },
    marketInfoView: {
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    linearBackground: {
        height: 49
    },
    marketInfoText: {
        color: "white", 
        fontWeight: "500", 
        fontSize: 14
    },
    orderText: {
        color: "white", 
        fontWeight: "500", 
        fontSize: 14
    }
});

export default Styles;