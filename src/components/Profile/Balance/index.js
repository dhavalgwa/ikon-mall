import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from "react-redux";


const Balance = () => {
    return (
        <View style={{ width: '100%', height: 65, alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginTop: 37, backgroundColor: "#FFFFFF", borderWidth: 1, borderColor: "#9edcea75" }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '97%', height: 55 }}>
                <View style={{ width: '18%', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: '#333232', fontFamily: "Montserrat" }}>Balance</Text>
                    <Text style={{ color: '#333232', fontFamily: "Montserrat" }}>450 ball</Text>
                </View>
                <View style={{ flexDirection: 'row', width: '46%', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity style={{ backgroundColor: '#4F6DFF', width: 32, height: 10, borderRadius: 10 }}>
                        <Text> </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: 'grey', width: 32, height: 10, borderRadius: 10 }}>
                        <Text> </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: 'grey', width: 32, height: 10, borderRadius: 10 }}>
                        <Text> </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: 'grey', width: 32, height: 10, borderRadius: 10 }}>
                        <Text> </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '18%', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: '#333232', fontWeight: '389' }}> +50 ball</Text>
                </View>
                <View style={{ width: '18%', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: 'white', width: '70%', height: 55, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ height: 20, width: 20 }} source={require("../../../assets/Images/ProfileImages/cart.png")} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default connect(({ fetchData }) => ({
    fetchData,
}), {})(Balance);