import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
	searchContainer: {
		width: '100%'
	},
	outerSearchBox: {
		width: '100%',
		position: 'relative'
	},
	searchView: {
		position: 'relative'
	},
	search: {
		width: '100%',
		backgroundColor: '#F9F9F6',
		shadowColor: 'white',
		shadowOffset: {
			width: 0,
			height: 1
		}
	},
	iconView: {
		position: 'absolute',
		right: 16,
		top: 0,
		zIndex: 1000,
		height: '100%',

		alignItems: 'flex-start',
		justifyContent: 'center'
	},
	icon: {
		fontSize: 20
	}
});

export default Styles;
