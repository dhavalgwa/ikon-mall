import { StyleSheet } from 'react-native';
import { Color } from '../../../constant/Constant';

const Styles = StyleSheet.create({
    categoryView: {
        width: '100%',
        
    },
    viewOnMap: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight:10,
        paddingBottom:10
    },
    categoriesText: {
        fontWeight: 'bold', 
        fontSize: 20
    },
    viewOnMapText: {
        color: 'blue'
    },
    buttonName: {
        width: 89,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.darkWiteColor, 
        marginRight:8,
        padding: 10, 
        borderRadius: 20,
    },
    buttonName1: {
        width: 89,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.green, 
        marginRight:8,
        padding: 10, 
        borderRadius: 20,
    },

    categoryText: {
        fontWeight: 'bold',
        color: 'black'
    },
    categoryText1: {
        fontWeight: 'bold',
        color: 'white'
    }
});

export default Styles;