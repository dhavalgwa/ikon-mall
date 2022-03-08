import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigation from './src/Navigation/StackNavigation/indexStackNavigation';


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
