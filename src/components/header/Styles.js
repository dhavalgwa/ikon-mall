import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    headerContainer: {
        justifyContent: "space-between", 
        alignItems: "center", 
        flexDirection: "row", 
        width: "100%", 
        paddingTop: 20
    },
    headerView: {
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingLeft: 10, 
        paddingRight: 10, 
        paddingTop: 14, 
        paddingBottom: 14
    },
    backView: {
        flexDirection: 'row', 
        minWidth: 40, 
        alignItems: 'center'
    },
    headerLeftContainer: {
        width: '80%', 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    imageView: {
        width: '70%', 
        alignItems: 'center'
    },
    logoImage: {
        height: 28, 
        width: 130
    },
    cartView: {
        width: '12%'
    },
    cartLGradiant: {
        position: 'absolute', 
        backgroundColor: 'blue', 
        height: 17, 
        width: 17, 
        top: -5, 
        borderRadius: 10, 
        left: -5, 
        zIndex: 100, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    itemNumberText: {
        color: 'white', 
        fontSize: 9
    }
})

export default Styles;