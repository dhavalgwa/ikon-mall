import { StyleSheet, Dimensions } from 'react-native';
import { Color } from '../../constant/Constant';
const { height } = Dimensions.get('window');

const storePageStyles = StyleSheet.create({
    storeIntroContainer: {
        width: '100%',
    },
    storeView: {
        flex: 1,
    },
    bannerView: {
        flex: 1,
        paddingLeft: 10,
        marginTop: height/ 11,
    },
    categoryContainer: {
        flexDirection: 'row',
        paddingLeft: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 15,
        paddingTop: 10,
        paddingBottom: 10,
    },
    itemContainer: {
        width: '100%',
        paddingLeft: 10,
        alignItems: 'center',
    },
    lableMoreView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 10,
        padding: 10,
    },
    oneDaySaleLableMoreView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        // marginTop: 20,
        // marginBottom: 20
    },
    oneDayView: {
        flexDirection: 'row', 
        alignItems: 'center', 
        width: '70%',
        marginBottom: 15
    },
    oneDaySaleButton: {
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: '#FFB800', 
        padding: 5, 
        borderRadius: 30
    },
    oneDayMoreView: {
        width: '30%', 
        alignItems: 'flex-end'
    },
    lableText: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    oneDaySaleText: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    moreViewText: {
        color: Color.linkColor,
        marginTop: 7,
        paddingRight: 10
    }
});

export default storePageStyles;