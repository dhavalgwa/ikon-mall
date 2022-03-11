import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { Color } from "../../constant/Constant";
import { setFilter } from '../../redux/action/index';
import LinearGradient from 'react-native-linear-gradient';

const { height } = Dimensions.get('screen');
const Filter = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [fromValue, setFromValue] = useState(11);
    const [toValue, setToValue] = useState();

    useEffect(() => {
        props.setFilter(modalVisible);
    }, [modalVisible]);


    return (
        <View style={{ backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30, alignItems: 'center', justifyContent: 'flex-end', height: 450, marginTop: height / 2.1 }}>
            <View style={{ flexDirection: "row", justifyContent: "flex-end", width: "90%" }}>
                <TouchableOpacity onPress={props.openModal} >
                    {/* <Entypo name="cross" size={24} color="black" /> */}
                </TouchableOpacity>
            </View>
            <View style={{ width: '90%', height: 400 }}>
                <View style={{ width: '100%', height: 80 }}>
                    <Text style={{ color: Color.darkWiteColor, fontSize: 15 }} >Sort by price</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 25 }} >$6 - $28</Text>
                </View>
                <View style={{ flexDirection: 'column', width: '100%', height: 210, justifyContent: 'space-evenly', paddingBottom: 10 }}>
                    <View style={{ height: 130, padding: 5 }}>
                        {/* <RangeSlider 
                            min={5} 
                            max={25}
                            fromValueOnChange={value => setFromValue(value)}
                            toValueOnChange={value => setToValue(value)}
                            initialFromValue={fromValue}
                        /> */}
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', height: 50, borderRadius: 10, backgroundColor: '#E9E9E6' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '95%' }}>
                            <TouchableOpacity style={{ backgroundColor: "#4F6DFF", width: '45%', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 10 }}>
                                <Text> Sort by low price </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: Color.categoryButtonColor, width: '45%', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 10 }}>
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
                    <View style={{ width: '100%', height: 55, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={props.openModal} style={{ width: '95%', height: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 30 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }} >Confirm filter</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        </View>
    )
}

const mapDispatchToProps = {
    setFilter,
};

export default connect(({ fetchData }) => ({
    fetchData,
}), mapDispatchToProps)(Filter);
