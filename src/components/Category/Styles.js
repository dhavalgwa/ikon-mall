import { StyleSheet } from 'react-native';
import { Color } from '../../constant/Constant';

const Styles = StyleSheet.create({
    categoryView: {
        width: '100%',
    },
    viewOnMap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 15
    },
    categoriesText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    viewOnMapText: {
        paddingTop: 6,
        color: Color.linkColor
    },
    category: {
        borderWidth: 1,
        borderColor: "#A5B5E9",
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
        padding: 10,
        borderRadius: 12,
    },
    disableButtonName: {
        backgroundColor: Color.categoryButtonColor,
    },
    allDisable: {
        backgroundColor: Color.categoryButtonColor,
        marginRight: 5,
        justifyContent: 'center',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#A5B5E9",
    },
    activeButtonName: {
        backgroundColor: "#4E6CFF",
    },
    allActive: {
        backgroundColor: "#4E6CFF",
        marginRight: 5,
        justifyContent: 'center',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#A5B5E9",
    },
    allActiveText: {
        color: 'white',
        fontWeight: 'bold'
    },
    allDisableText: {
        color: 'black',
        fontWeight: 'bold'
    },
    minWidth: {
        width: 80,
    },

    categoryText: {
        fontWeight: 'bold',
        color: 'black',
        textTransform: 'capitalize'
    },
    productContainer: {
        marginTop: 10
    },
    categoryText1: {
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'capitalize'
    }
});

export default Styles;