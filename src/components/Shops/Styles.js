import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    shopContainer: {
        padding: 5,
    },
    shopCardView: {
        borderRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: 180
    },
    imageView: {
        alignItems: 'center'
    },
    image: {
        height: 100,
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        resizeMode: 'stretch'
    },
    descriptionView: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 5,
        height: 95,
        backgroundColor: 'white',
    },
    description: {
        width: '95%',
    },
    shopNameText: {
        fontWeight: 'bold',
        fontSize: 13,
        width: 120,
        marginTop: 5,
        marginBottom: 5
    },
    timeView: {
        flexDirection: 'row',
        paddingLeft: 11,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginTop: 2,
        alignContent: 'center'
    },
    timeText: {
        fontSize: 10,
        fontWeight: 'bold',
        color:'white'
    },
    bottomLinear: {
        height: 49, 
        borderBottomLeftRadius: 10, 
        borderBottomRightRadius: 10
    }
})

export default Styles;