import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function Register() {
  return (
    <View>
      <Text style={styles.registerHeader}>Register</Text>
      <TextInput style={styles.input} placeholder="Email"></TextInput>
      <TextInput style={styles.input} placeholder="Password"></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    alignSelf: "stretch",
    margin: 15,
    height: 40,
    borderRadius: 6,
    paddingHorizontal: 4,
    fontSize: 16,
    fontWeight: "700",
  },
  registerHeader:{
      alignSelf:"center",
      fontSize:20,
      fontWeight:"bold",
      marginTop:5
  }
});
