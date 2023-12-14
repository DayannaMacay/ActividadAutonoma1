import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Calculator from './src/Calculadora';

export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <Calculator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff'
  }
});
