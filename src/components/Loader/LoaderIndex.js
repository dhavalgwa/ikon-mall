import React from 'react';
import { View, Image, Text } from 'react-native';
import Styles from './Styles';

const Loader = (props) => {
	return (
		<View style={Styles.loaderContainer}>
			<Image source={require('../../assets/Images/Loader/Loading.gif')} style={Styles.loaderImage} />
		</View>
	);
};
export default Loader;
