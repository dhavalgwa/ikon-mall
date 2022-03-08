import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigation from './src/Navigation/StackNavigation/indexStackNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </View>
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
