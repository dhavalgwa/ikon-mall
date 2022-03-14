import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MarketInfo from "./Market info";
import DeliveryTime from "./Delivery Times";

const Tab = createMaterialTopTabNavigator();

export default function StoreInfo() {
  const tabBarOptions = {

    activeTintColor: 'white',
    inactiveTintColor: 'black',
    indicatorStyle: { backgroundColor: "#4E6CFF", height: '100%', borderRadius: 10 },
    pressOpacity: 1,
    style: {
      borderRadius: 10,
      backgroundColor: "#E3E5ED"


    }
  }
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions} >
      <Tab.Screen name="Market Info" component={MarketInfo} />
      <Tab.Screen name="Delivery Time" component={DeliveryTime} />
    </Tab.Navigator>

  );
}
