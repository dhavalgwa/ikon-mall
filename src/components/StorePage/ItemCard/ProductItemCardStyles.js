import { StyleSheet } from 'react-native';

const ProductItemCardStyles = StyleSheet.create({
    container: {
        width:'100%',
    },
    cardView: {
        margin:0,
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    likeView: {
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    likeIcon: {
        padding: 10
    },
    imageView: {
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
    },
        descriptionView: {
        height: 60,
        justifyContent: 'center',
    },
    ratingView: {
        flexDirection: 'row',
        paddingLeft: 5,
        marginTop: 5,
        marginBottom: 5,
        width: '30%',
        justifyContent: 'space-between',
    },
    ratingText: {
        fontWeight: 'bold'
    },
    descountView: {
        flexDirection: 'row',
        paddingLeft: 5,
        width: '90%',
        justifyContent: 'space-between'
    },
    savedText: {
        fontWeight: 'bold',
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    },
    saleText: {
        color: '#DD2339'
    },
    addItemContainer: {
        padding: 5,
        marginTop: 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        // backgroundColor: 'red'
    },
    timeView: {
        backgroundColor: '#FFB800',
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 5
    },
    addItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    priceText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    addButton: {
        marginRight: 10,
        borderRadius: 20,
        padding: 5,
        backgroundColor:"white"

    },
    timeText: {
        color: 'white',
        fontSize: 20
    }
})

export default ProductItemCardStyles;