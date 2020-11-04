import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Takedowns from "./screens/Takedowns.js"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the virtual Jiu-Jitsu Trainer</Text>
      <StatusBar style="auto" />
      <Takedowns/>
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
