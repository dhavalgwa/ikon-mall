import React, { useEffect, useState } from "react";
import { Text, ScrollView } from 'react-native';
import ItemCard from '../../components/StorePage/ItemCard/index';
import { connect } from 'react-redux';
import { Products, addToCart } from '../../redux/action/index';

const CartScreen = (props) => {
    const [cartData, setCartData] = useState([]);

    const CartData = () => {
        props.fetchData.productData.length > 0 && props.fetchData.productData.map((product, id) => {
            setCartData(product);
            // product.productitems_info.map((data, id) => {
            //     props?.cartData?.length > 0 && props?.cartData?.map((addData, id) => {
            //         if (addData == data.id) {
            //             setCartData(product);
            //         }else {
            //             null
            //         }
            //     })
            // })    
        })
    }

    useEffect(() => {
        CartData();
    }, [cartData])

    useEffect(() => {
        props.Products();
        props.addToCart();
    }, [])

    return (
        <ScrollView>
            <ItemCard timeData={false} Data={cartData} Horizontal={true} />
            <Text>Here is cart</Text>
        </ScrollView>
    )
}

// const mapStateToProps = (state) => ({
//     productData: state.fetchData.productData,
//     cartData: state.fetchData.addToCart,
// });

const mapDispatchToProps = {
    Products,
    addToCart,
};
export default connect(({ fetchData }) => ({
    fetchData,
}), mapDispatchToProps)(CartScreen);