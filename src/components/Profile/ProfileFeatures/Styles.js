import { BackHandler, StyleSheet } from 'react-native';
import { Color } from '../../../constant/Constant';

const Styles = StyleSheet.create({
    container: {
        width: '95%',
    },
    featureCardContainer: {
        width: '100%',
        backgroundColor: 'white',
        height: 70,
        borderRadius: 5,
        borderBottomWidth: 1,
        borderBottomColor: Color.bottomBorderColor,
        marginTop: 1
    },
    featureView: {
        flexDirection: 'row',
        height: 70,
        width: '100%',
        justifyContent: 'space-between'
    },
    iconView: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center', backgroundColor: "pink"
    },
    nameContainer: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
    },
    nameText: {
        fontWeight: '700',
        fontSize: 15
    },
    image: {
        height: 20,
        width: 20
    },
    nameTextView: {
        width: '40%',
        justifyContent: 'center'
    },
    conditionalDataContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    orderNotificationView: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    notificationButton: {
        backgroundColor: '#FFA100',
        height: 30,
        width: 30,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    notificationText: {
        color: 'white'
    },
    profileStatusContainer: {
        paddingLeft: 10,
        paddingRight: 5,
        alignItems: 'center',
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    completeTextView: {
        height: '50%',
        width: '100%',
        justifyContent: 'center',
    },
    indecatorContainer: {
        height: '50%',
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    indecatorView: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly'
    },
    activeIndecaroButton: {
        backgroundColor: 'black',
        height: '25%',
        width: '12%',
        borderRadius: 10
    },
    disableIndecator: {
        backgroundColor: '#88887E',
        height: '25%',
        width: '12%',
        borderRadius: 10
    }
})

export default Styles;