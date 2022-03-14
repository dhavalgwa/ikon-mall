import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastProvider } from 'react-native-paper-toast';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/redux/store/index';
import Navigation from './src/Navigation/StackNavigation/index';

export default function App() {
	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			<NavigationContainer>
				<PaperProvider>
					<ToastProvider>
						<Provider store={store}>
							<Navigation />
						</Provider>
					</ToastProvider>
				</PaperProvider>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}
