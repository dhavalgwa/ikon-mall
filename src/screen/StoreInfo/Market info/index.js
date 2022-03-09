import React, { useEffect, useState } from 'react'
import { View, Text, FileList } from 'react-native'
import { Card } from 'react-native-paper'
import { connect } from 'react-redux'
import { setMarketInfo } from '../../../redux/action/index'
import Styles from './indexStyle'

const MarketInfo = (props) => {

  useEffect(() => {
    props.setMarketInfo()
  }, [])

  return (
    <View>
      {props.fetchData.StoreInfoData?.length > 0 &&
        props.fetchData.StoreInfoData?.map((tempObj, id) => {
          return (
            <View key={id}>
              <Card style={Styles.card}>
                <View style={Styles.address}>
                  <Text style={Styles.addressText}>Address</Text>
                  <Text style={Styles.addressTextMap}>{tempObj.address}</Text>
                </View>
                <View style={Styles.workinghours}>
                  <Text style={Styles.workinghoursText}>Working hours</Text>
                  <Text style={Styles.workinghoursTextmap}>
                    {tempObj.workinghours}
                  </Text>
                </View>
                <View style={Styles.Deliveryfee}>
                  <Text style={Styles.Deliveryfeetext}>Delivery fee</Text>
                  <Text style={Styles.Deliveryfeetextmap}>
                    {tempObj.Deliveryfee}
                  </Text>
                </View>
                <View style={Styles.Deliverytype}>
                  <Text style={Styles.Deliverytypetext}>Delivery type</Text>
                  <Text style={Styles.Deliverytypetextmap}>
                    {tempObj.Deliverytype}
                  </Text>
                </View>
                <View style={Styles.databorder} />
                <View style={Styles.desc}>
                  <Text style={Styles.descText}>Description</Text>
                  <Text style={Styles.descTextmap}>{tempObj.Desc}</Text>
                </View>
                <View style={Styles.info}>
                  <Text style={Styles.infoText}>Info</Text>
                  <Text style={Styles.infoTextMap}>{tempObj.Info}</Text>
                </View>
              </Card>
            </View>
          )
        })}
    </View>
  )
}

const mapStateToProps = (state) => ({
  StoreInfoData: state,
})

const mapDispatchToProps = {
  setMarketInfo,
}

export default connect(({ fetchData }) => ({
  fetchData,
}), mapDispatchToProps)(MarketInfo)
