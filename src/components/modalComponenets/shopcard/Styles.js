import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    shopContainer: {
        width: '25%',
        padding:5, 
    },
    shopCardView: {
        height: '100%',
        borderRadius: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    imageView: {
        alignItems: 'center',
        
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
        justifyContent: 'center', 
        paddingTop:7,
        paddingBottom:10          , 
        width: 140,
        backgroundColor: 'white',
    },
    description: {
        width: '90%',
    },
    shopNameText: {
        fontWeight: 'bold', 
        fontSize: 13,
    },
    timeView: {
        flexDirection: 'row', 
        paddingLeft: 11, 
        paddingTop:6,
        paddingBottom:6,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginTop:2,
        alignContent:'center'
    },
    timeText: {
        height:"15%",
        width:"100%",
        display:"flex",
        backgroundColor:"red",
        fontSize:10,
        fontWeight: 'bold'
    }
})

export default Styles;