import React from 'react';
import { View, Image, Text } from 'react-native';
import Styles from './LoaderStyles';
import ILoderProps from './Loder.modal';

const Loader = (props: ILoderProps) => {
	return (
		<View style={Styles.loaderContainer}>
			{props.image ? (
				<Image source={{ uri: props.image }} style={Styles.loaderImage} />
			) : (
				<Image source={require('../../assets/Images/Loader/Loading.gif')} style={Styles.loaderImage} />
			)}
			<Text>{props.text ? props.text : 'Loading...'}</Text>
		</View>
	);
};

export default Loader;
