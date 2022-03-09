import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';


const NotificationCard = (props) => {

    return (
        <View>
            {
                props?.showHide ? (
                    <View style={{ backgroundColor: 'white', justifyContent: 'space-between', margin: 10, flexDirection: 'row' }}>
                        <View>
                            <Text>{props.cardData.name}</Text>
                            <Text>{props.cardData.Time}</Text>
                        </View>
                        <TouchableOpacity>
                            <Text>Show More</Text>
                        </TouchableOpacity>
                    </View>
                ) : null
            }
            {
                props?.showHide == false ? (
                    <View style={{ backgroundColor: 'white', justifyContent: 'space-between', margin: 10, flexDirection: 'row' }}>
                        <View>
                            <Text>{props.cardData.name}</Text>
                            <Text>{props.cardData.Time}</Text>
                        </View>
                        <TouchableOpacity>
                            <Text>Show More</Text>
                        </TouchableOpacity>
                    </View>
                ) : null
            }

        </View>
    )
}

export default connect(({ fetchData }) => ({
    fetchData,
}), {})(NotificationCard);