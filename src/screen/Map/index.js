import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	Button,
	Modal,
	Pressable,
	StyleSheet,
	TouchableOpacity,
	Alert,
	Image
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Data from '../../data/shopMarker';
import SearchBars from '../../components/modalComponenets/SearchBar/index';
import Categorys from '../../components/modalComponenets/catrgory/index';
import ShopLists from '../../components/modalComponenets/shopcard/index';
import Styles from './indexStyle';

const Map = () => {
	const [ modalVisible, setModalVisible ] = useState(false);
	const [ mapRegion, setMapRegion ] = useState({
		latitude: 21.15153,
		longitude: 72.79832,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421
	});
	const [ data, setData ] = useState(Data);
	return (
		<View>
			<MapView
				style={Styles.mapview}
				region={{
					latitude: 21.16153,
					longitude: 72.80832,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421
				}}
			/>

			<View style={Styles.modalview} />

			<View>
				<View style={Styles.centeredView}>
					<Modal
						animationType="slide"
						transparent={true}
						visible={modalVisible}
						onRequestClose={() => {
							Alert.alert('Modal has been closed.');
							setModalVisible(!modalVisible);
						}}
					>
						<View style={Styles.centeredView}>
							<View style={Styles.modalView}>
								<View style={Styles.subModleView}>
									<View style={Styles.serchbar}>
										<SearchBars />
									</View>
									<View>
										<Categorys />
									</View>
									<View>
										<ShopLists />
									</View>
								</View>
							</View>
						</View>
					</Modal>
				</View>
			</View>
		</View>
	);
};
export default Map;
