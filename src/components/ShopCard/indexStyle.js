import { StyleSheet } from 'react-native'
import { Color } from '../../constant/Constant';

const Styles = StyleSheet.create({
    container: {
        width: '100%', 
        height: '100%',
        display: 'flex',
    },  
    cardView: {
        borderWidth:2,
        borderColor:"#A5B5E9",
        borderRadius:10,
        marginBottom:15,
        backgroundColor:"white",
        width: '100%', 
        flexDirection: 'row', 
        alignItems: 'center',
        paddingTop: 10, 
        paddingBottom: 10,
        
    },
    detailView: {
        paddingLeft: 10,
        width: 250,
    },  
    name_desc: {
        width: '83%'
    },
    image: {
        height: 85,
        width: 85, 
        borderRadius: 60, 
        margin: 5 
    },
    shopeName: {
        fontWeight: 'bold', 
        fontSize: 15
    },
    descriptionText:{
        color: Color.darkWiteColor,
        fontSize: 12

    },
    timeView: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: '60%',
        marginTop: 5,
        marginBottom: 10
    },
    time: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5
    },
    timeText: {
        fontWeight: 'bold',
        fontSize: 13
    },
    subTimeView: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold'
    }
});

export default Styles;
