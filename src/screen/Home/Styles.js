import { StyleSheet } from 'react-native';
import { Color } from '../../constant/Constant';

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#F3F3F0'
    },
    addressView: {
        flex: 1, 
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    searchView: {
        flex: 1, 
        alignItems: 'center',
        marginTop: 2
    },
    choseShopContainer: {
        flex: 1, 
        alignItems: 'center'
    },
    choseShopView: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        width: '100%', 
        marginTop: 15,
        paddingLeft: 9,
        paddingRight:9, 
        marginBottom: 5 
    },
    choseShopeText: {
        fontWeight: 'bold', 
        fontSize: 17,
        textTransform: 'capitalize'
    },
    ViewAllText: {
        color: Color.linkColor, 
        fontSize: 15
    },
    shopListContainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        paddingLeft: 6
       
    },
    shopListView: {
        width: '100%',
        
    },
    categoryView: {
        flex: 1, 
        
        paddingTop:20,
        paddingBottom:20
    },
    shopCardView: {
        flex: 1, 
        alignItems: 'center', 
        borderRadius: 5, 
        margin: 2,
        marginLeft:10,
        marginRight:10
    },
    loaderImage: {
        height: 100, 
        width: 100
    }
});

export default Styles;