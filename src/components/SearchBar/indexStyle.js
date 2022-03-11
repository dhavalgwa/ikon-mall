import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    searchContainer: {
        width: "100%",
    },
    outerSearchBox: {
        width: '100%',
        position: 'relative',
        zIndex: 10,
    },
    searchView: {
        position: 'relative',
    },
    search: {
        width: '100%',
        backgroundColor: '#E8FCFC',
        shadowColor: 'white',
        shadowOffset: {
            width: 0,
            height: 1
        },
        fontSize: 2
        // borderRadius: 20
    },
    iconView: {
        position: 'absolute',
        right: 16,
        top: 0,
        zIndex: 1000,
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    icon: {
        fontSize: 20
    }
});

export default Styles;