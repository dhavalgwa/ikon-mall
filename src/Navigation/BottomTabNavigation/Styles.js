import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    savingContainer: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    linearGradient: {
        height: 50
    },
    profileImage: {
        height: 30, 
        width: 30, 
        borderRadius: 20, 
        resizeMode: 'cover'
    }
});

export default Styles;