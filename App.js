import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>BlikBlok</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: 
  {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },

});









/*
const textstyle = StyleSheet.create(
  {
    baseText: {
      flex: 1,
      color: 'white',
      alignItems: 'center',
      justifyContent: 'center',

    }
  }
);

*/