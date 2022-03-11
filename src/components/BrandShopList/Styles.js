import { StyleSheet } from 'react-native';
import { Color } from '../../constant/Constant';

const Styles = StyleSheet.create({
    BrandView: {
        margin: 2, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    image: {
        height: 80, 
        width: 80,
        borderRadius: 40,
        margin: 2
    },
    activeShopText: {
        color: 'black', 
        padding: 5,
        fontWeight: 'bold',
        fontSize: 17
    },
    disableShopText: {
        color: Color.darkWiteColor, 
        padding: 5,
        fontWeight: 'bold',
        fontSize: 17
    }
})

export default Styles;