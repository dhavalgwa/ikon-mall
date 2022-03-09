import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Styles from './indexStyles';
import { connect } from "react-redux";

const Banner = (props) => {
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal={true}
        >{
                props?.data?.length > 0 && props?.data?.map((d, id) => {
                    return (
                        <View key={id} style={Styles.container}>
                            <View style={Styles.descriptionView}>
                                <View style={Styles.nameDescriptionView}>
                                    <Text style={Styles.nameText} >{d.name}</Text>
                                    <Text style={Styles.descriptionText} >{d.decription}</Text>
                                </View>



                                <View style={Styles.buttonView}>
                                    <LinearGradient
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                        colors={["#4E6CFF", "#7B9AFF"]}
                                        style={{ height: 49 }}
                                    >
                                        <TouchableOpacity style={Styles.button} >

                                            <Text style={Styles.buttonText}>Show details</Text>

                                        </TouchableOpacity>
                                    </LinearGradient>

                                </View>

                            </View>
                            <View style={Styles.imageView}>
                                <Image source={d.image} style={Styles.image} />
                            </View>
                        </View>
                    )
                })
            }

        </ScrollView>
    )
}

export default connect(({ fetchData }) => ({
    fetchData,
}), {})(Banner);