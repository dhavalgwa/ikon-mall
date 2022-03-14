import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { setFootball, Products } from '../../../redux/action/index';

const Discount = (props) => {

    useEffect(() => {
        props.setFootball();
        props.Products();
    }, [])

    return (
        <View style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <Text>work in Progress</Text>
        </View>
        // <ScrollView
        //     showsHorizontalScrollIndicator={false}
        //     showsVerticalScrollIndicator={false}
        // >
        //     <View style={Styles.container}>
        //         <View style={Styles.itemCardView}>
        //             <ItemCard navData={props} Horizontal={false} Data={props?.fetchData?.ProductData?.data} />
        //         </View>
        //         <View style={Styles.itemCardView}>
        //             <ItemCard navData={props} Horizontal={false} Data={props?.fetchData?.ProductData?.data} />
        //         </View>
        //     </View>
        // </ScrollView>
    )
}

const mapDispatchToProps = {
    setFootball,
    Products
}

export default connect(({ fetchData }) => ({
    fetchData,
}), mapDispatchToProps)(Discount)
