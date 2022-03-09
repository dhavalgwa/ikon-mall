import { StyleSheet } from 'react-native';
import { Color } from '../../constant/Constant';

const Styles = StyleSheet.create({
    addressViewContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 5,
        paddingLeft:10,
        paddingRight:15

    },
    addressView: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
       
    },
    locationIcon: {
        backgroundColor: "#FFFFFF",
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    addressTexView: {
        width: '60%',
        padding: 2
    },
    addressText: {
        color: "#FFFFFF",
        fontWeight: '700',
    },
    text: {
        color: "white",
        fontWeight: '300',
        fontSize:10
    },
    changeButton: {
        backgroundColor: '#FFFFFF',
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70%',
        borderRadius: 30
    },
    btnText: {
        color: '#064883',
        fontWeight:"bold",
        fontSize:13
    }
});

export default Styles;