import { StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

const Styles = StyleSheet.create({
    container: {
        height: 200,
    },
    nameContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContainer: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop:20,
        padding:15,
        borderRadius:12,
        borderWidth:1,
        borderColor:'#B6E1E7'
    }
});

export default Styles;