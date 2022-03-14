import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Styles from './indexStyle';
import { connect } from 'react-redux';
import { setNotification, updateNotification } from '../../../redux/action/index';
const Notification = (props) => {

  const [data, setData] = useState(props?.fetchData?.NotificationData);
  const [tid, setId] = useState();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    props.setNotification();
  }, []);

  const ShowDec = (id, Id) => {
    setId(id);
    setToggle(!toggle);

    props.fetchData.NotificationData.map((data, id) => {
      if (Id == data.id) {
        data.readData = true;
      }
    })

    props.updateNotification(props.fetchData.NotificationData);
  }

  const setAllData = () => {
    setData(props?.fetchData?.NotificationData);
  }

  useEffect(() => {
    setAllData();
  }, [props?.fetchData?.NotificationData])

  const remove = () => {
    if (props?.fetchData?.NotificationData.length && props?.fetchData?.NotificationData) {
      setData([]);
    }
  }

  return (
    <View style={Styles.Container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {data?.length > 0 &&
          data?.map((data, id) => {
            return (
              <View key={id}>
                {toggle && tid == data.id ? (
                  <View style={Styles.Card}>
                    <View style={Styles.CardView}>
                      <View style={Styles.CardView1}>
                        <View style={Styles.name}>
                          <Text style={Styles.nameText}>{data.name} </Text>
                        </View>
                        <View style={Styles.time}>
                          <Text style={Styles.timeText}>{data.Time}</Text>
                        </View>
                      </View>
                      <View>
                        <TouchableOpacity onPress={() => ShowDec(id, data.id)}>
                          {/* <MaterialCommunityIcons
                            name="chevron-down"
                            size={24}
                            color="black"
                            style={Styles.icon}
                          /> */}
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={Styles.informationView}>
                      <View style={Styles.notificationINdecator}>
                        <Image
                          source={data.image}
                          style={Styles.imageNotification}
                        />
                      </View>
                      <View style={Styles.notificationTextView}>
                        <Text style={Styles.notificationText}>{data.info}</Text>
                      </View>
                    </View>
                  </View>
                ) : (
                  <View style={Styles.Card}>
                    <View style={Styles.CardView}>
                      {
                        !data.readData ? (
                          <View style={Styles.indecationView}>
                            <Text>  </Text>
                          </View>
                        ) : null
                      }
                      <View style={Styles.CardView1}>
                        <View style={Styles.name}>
                          <Text style={Styles.nameText}>{data.name} </Text>
                        </View>
                        <View style={Styles.time}>
                          <Text style={Styles.timeText}>{data.Time}</Text>
                        </View>
                      </View>
                      <View>
                        <TouchableOpacity onPress={() => ShowDec(id, data.id)}>
                          <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color="black"
                            style={Styles.icon}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
              </View>
            )
          })}
      </ScrollView>
      <View
        style={Styles.buttonView}
      >

        <TouchableOpacity
          onPress={remove}
          style={Styles.clearButton}
        >
          <Text style={Styles.buttonText}>Clear all</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const mapDispatchToProps = {
  setNotification,
  updateNotification
}

export default connect(({ fetchData }) => ({
  fetchData,
}), mapDispatchToProps)(Notification);
