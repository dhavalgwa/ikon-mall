import React, { useEffect } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import Moment from 'moment';
import { connect } from 'react-redux';
import { setDeliveryData } from "../../../redux/action/index";
import Styles from "./Styles";

const DeliveryTime = (props) => {

	useEffect(() => {
		props.setDeliveryData();
	}, []);


	return (
		<ScrollView>
			{props?.fetchData?.DeliveryData?.length > 0 && props?.fetchData?.DeliveryData?.map((data, id) => {
				var now = Moment().format('DD MMM');
				var tomorrow = Moment().add(1, 'days').format('DD MMM');

				const Card = (color, day) => {
					return (
						<TouchableOpacity style={Styles.cardView}>
							<Text style={{ color: color, fontWeight: 'bold', fontSize: 15 }}>{data.date}  {day}</Text>
							<Text style={Styles.timeText} >{data.time}</Text>
						</TouchableOpacity>
					)
				};
				return (
					<View key={id}>
						{
							now == data.date ? (
								Card("#4F6DFF", "Today")
							) : null
						}
						{
							tomorrow == data.date ? (
								Card('#88887E', 'Tomorrow')
							) : null
						}
						{
							data.date > tomorrow ? (
								Card('#88887E', ' ')
							) : null
						}
					</View>
				)
			})}
		</ScrollView>
	)
}

const mapDispatchToProps = {
	setDeliveryData
}

export default connect(({ fetchData }) => ({
	fetchData,
}), mapDispatchToProps)(DeliveryTime);

