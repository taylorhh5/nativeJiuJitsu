import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import axios from "axios";

export default function Register() {
  const [signUp, setSignUp] = useState({
    email: "",
    password: "",
  });

  //When typing in email input detected, setSignup to everything in signup but update email with value
  const handleEmailChange = (val) => {
    setSignUp({
      ...signUp,
      email: val,
    });
  };

  //When typing in password input detected, setSignup to everything in signup but update password with value
  const handlePasswordChange = (val) => {
    setSignUp({
      ...signUp,
      password: val,
    });
  };

  const handleSubmit = () => {
    axios
      .post("https://jiujitsux.herokuapp.com/api/users/register", signUp)
      .then((response) => {
        console.log(response, "register response");
      })
      .catch((err) => console.log("register error"));
  };

  return (
    <View>
      <Text>{signUp.email}</Text>
      <Text>{signUp.password}</Text>
      <Text style={styles.registerHeader}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(val) => handleEmailChange(val)}
      ></TextInput>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Password"
        onChangeText={(val) => handlePasswordChange(val)}
      ></TextInput>
      <Button title="Submit" onPress={handleSubmit}></Button>
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
  registerHeader: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },
});
