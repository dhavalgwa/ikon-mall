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
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Data from '../../data/shopMarker';
import SearchBarMap from '../../components/map/searchBar/index';
import SearchBars from '../../components/modalComponenets/SearchBar/index';
import Categorys from '../../components/modalComponenets/catrgory/index';
import ShopLists from '../../components/modalComponenets/shopcard/index';

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
				style={{ alignSelf: 'stretch', height: '100%' }}
				region={{
					latitude: 21.16153,
					longitude: 72.80832,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421
				}}
			/>

			<View
				style={{
					position: 'absolute',
					display: 'flex',
					height: '15%',
					width: '95%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'row',
					marginLeft: 10
				}}
			/>

			<View>
				<View style={styles.centeredView}>
					<Modal
						animationType="slide"
						transparent={true}
						visible={modalVisible}
						onRequestClose={() => {
							Alert.alert('Modal has been closed.');
							setModalVisible(!modalVisible);
						}}
					>
						<View style={styles.centeredView}>
							<View style={styles.modalView}>
								<View style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
									<View style={{ marginTop: 10 }}>
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

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'flex-end'
	},
	modalView: {
		height: 400,
		width: '100%',
		backgroundColor: 'white',
		borderRadius: 20,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	button: {
		borderRadius: 25,
		padding: 10,
		elevation: 2,
		margin: 12,
		height: 50
	},
	buttonOpen: {
		backgroundColor: '#45A524',
		// height:50,
		margin: 10
	},
	buttonClose: {
		backgroundColor: '#45A524'
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 20
	},
	modalText: {
		borderColor: '#666',
		backgroundColor: '#FFF',
		borderWidth: 1
	}
});
