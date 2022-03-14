import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
   container: {
       width: '100%',
       height: 100,
   },
   iconView: {
       flexDirection: 'row',
       width: '100%', 
       alignItems: 'flex-end', 
       justifyContent: 'flex-end', 
       height: 50,
   },
   nameImageContainer: {
       flexDirection: 'row', 
       alignItems: 'center'
   },
   imageView: {
       width: '30%', 
       height: 100
   },
   profileImage: {
       height: 100, 
       width: 100, 
       borderRadius: 50
   },
   nameContainer: {
       width: '70%', 
       height: 100, 
       justifyContent: 'center'
   },
   nameView: {
       width: '80%', 
       height: 100, 
       justifyContent: 'center', 
       paddingLeft: 5
   },
   nameText: {
       fontWeight: 'bold',
       fontSize: 22,
       color:'white'
   }
});

export default Styles;