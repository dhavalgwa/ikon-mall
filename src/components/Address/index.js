import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from "react-redux";
import Styles from './Styles';

import {
    setAddress,
} from '../../redux/action/index';

const Address = (props) => {

    useEffect(() => {
        props.setAddress();
    }, [])

    return (
        <View>
            <View style={Styles.addressViewContainer}>
                <View style={Styles.addressView}>
                    <TouchableOpacity style={Styles.locationIcon}>
                        <Image source={require('../../assets/Images/Location/locationLog.png')} style={Styles.image} />

                    </TouchableOpacity>
                    <View style={Styles.addressTexView}>
                        <Text style={Styles.addressText}>Delivery Address</Text>
                        {
                            props?.fetchData?.Address?.length > 0 && props?.data?.map((data, id) => {
                                return (
                                    <Text key={id} style={Styles.text}>{data.address}</Text>
                                )
                            })
                        }
                    </View>
                    <TouchableOpacity style={Styles.changeButton} onPress={props.navigate} >
                        <Text style={Styles.btnText} >Change</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>    
    )
}

Address.propTypes = {};
Address.defaultProps = {};

const actionCreators = {
    setAddress,
};

export default connect(
    ({ fetchData }) => ({
        fetchData,
    }),
    actionCreators
)(Address);