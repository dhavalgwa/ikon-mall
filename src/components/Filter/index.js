import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { Color } from "../../constant/Constant";
import { setFilter } from '../../redux/action/index';
import LinearGradient from 'react-native-linear-gradient';
import Styles from "./indexStyle";

const { height } = Dimensions.get('screen');
const Filter = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [fromValue, setFromValue] = useState(11);
    const [toValue, setToValue] = useState();

    useEffect(() => {
        props.setFilter(modalVisible);
    }, [modalVisible]);


    return (
        <View style={Styles.contener}>
            <View style={Styles.modal}>
                <TouchableOpacity onPress={props.openModal} >
                    {/* <Entypo name="cross" size={24} color="black" /> */}
                </TouchableOpacity>
            </View>
            <View style={Styles.subContener}>
                <View style={Styles.sortByPrice}>
                    <Text style={Styles.sortText} >Sort by price</Text>
                    <Text style={Styles.dollerText} >$6 - $28</Text>
                </View>
                {/* <View style={Styles.{ flexDirection: 'column', width: '100%', height: 210, justifyContent: 'space-evenly', paddingBottom: 10 }}>
                    <View style={{ height: 130, padding: 5 }}>
                        <RangeSlider 
                            min={5} 
                            max={25}
                            fromValueOnChange={value => setFromValue(value)}
                            toValueOnChange={value => setToValue(value)}
                            initialFromValue={fromValue}
                        /> 
                    </View> */}
                    <View style={Styles.sortbycontener}>
                        <View style={Styles.sortlow}>
                            <TouchableOpacity style={Styles.sortLOWTouch}>
                                <Text> Sort by low price </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.sortHighTouch}>
                                <Text> Sort by high price </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={["#4E6CFF", "#7B9AFF"]}
                    style={{ height: 49 }}
                >
                    <View style={Styles.button}>
                        <TouchableOpacity onPress={props.openModal} style={Styles.buttonTouch}>
                            <Text style={Styles.buttonText} >Confirm filter</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
    )
}

const mapDispatchToProps = {
    setFilter,
};

export default connect(({ fetchData }) => ({
    fetchData,
}), mapDispatchToProps)(Filter);
