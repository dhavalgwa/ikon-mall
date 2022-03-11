import { StyleSheet, Platform } from 'react-native';

const Styles = StyleSheet.create({
   oneDayHeaderContainer: {
        height: 35, 
        width: 150
   },
   oneDaySaleImage: {
       height: 35, 
       width: 150
   },
   oneDayHeaderView: {
       position: 'absolute', 
       height: 35, 
       width: 150, 
       alignItems: 'flex-start', 
       justifyContent: 'center'
   },
   offerText: {
       color: 'white', 
       fontWeight: 'bold', 
       fontSize: 17, 
       paddingLeft: 10
   },
   storeInfoHeaderView: {
       flexDirection: 'row', 
       width: Platform.OS === 'ios' ? "100%" : "84%"
   },
   storeInfoImage: {
       height: 25, 
       width: 25
   },
    storeInfoTitleText: {
        fontWeight: 'bold',
        fontSize: 19,
        marginLeft: 10,
        marginTop: 1,
    }
})

export default Styles;