import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get('screen').height;

const Styles = StyleSheet.create({
    container: {
        width: 330,
        flexDirection: 'row',
        backgroundColor:'#E1D9D1',

        borderRadius: 20,
        margin: 2,
    },
    descriptionView: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '60%',
        height: '100%'
    },
    nameDescriptionView: {
        height: '60%',
        paddingLeft: 25,
        width: '100%'
    },
    nameText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#4E6CFF'
    },
    descriptionText: {
        fontWeight: 'bold',
        fontSize: 13,
        color: '#9A9A9A'
    },
    buttonView: {
        paddingLeft: 20,
        height: '40%',
        justifyContent: 'center',
        width: "80%", marginRight: 10
    },
    button: {
        // backgroundColor: '#57727C', 
        width: 140,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    buttonText: {
        color: 'white'
    },
    imageView: {
        width: '40%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    image: {
        height: 140,
        width: 140,
        borderBottomRightRadius: 20
    }
});

export default Styles;