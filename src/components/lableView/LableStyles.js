import { StyleSheet } from 'react-native';
import { Color } from '../../constant/Constant';

const Styles = StyleSheet.create({
    choseShopContainer: {
        flex: 1,
        alignItems: 'center'
    },
    choseShopView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 15,
        paddingLeft: 9,
        paddingRight: 9,
        marginBottom: 5
    },
    choseShopeText: {
        fontWeight: 'bold',
        fontSize: 17,
        textTransform: 'capitalize'
    },
    ViewAllText: {
        color: Color.linkColor,
        fontSize: 15
    },
});

export default Styles;