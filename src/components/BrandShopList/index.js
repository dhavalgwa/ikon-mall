import React, { useState, useEffect } from "react";
import { Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Styles from './Styles';
import { setBrandShopData, setBrandShopId } from '../../redux/action/index';

const BrandShopList = (props) => {
    const [shopActive, setShopActive] = useState(0);

    useEffect(() => {
        props.setBrandShopData();
    }, [])

    const goToBrandStore = (id) => {
        setShopActive(id);
        props.setBrandShopId(id);
    }
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal={true}
        >
            {
                props?.brandData?.length > 0 && props?.brandData?.map((data, id) => {
                    return (
                        <TouchableOpacity onPress={() => goToBrandStore(data._id)} key={id} style={Styles.BrandView}>
                            <Image source={{ uri: data.icon }} style={Styles.image} />
                            <Text style={shopActive == data._id ? Styles.activeShopText : Styles.disableShopText} >{data.name}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    )
}

const mapDispatchToProps = {
    setBrandShopData,
    setBrandShopId
};

export default connect(({ fetchData }) => ({
    fetchData,
}), mapDispatchToProps)(BrandShopList);
