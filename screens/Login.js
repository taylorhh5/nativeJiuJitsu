import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function Login() {
  const [name, setName] = useState();

  const storeData = async () => {
    try {
      await AsyncStorage.setItem("MyName", name);
    } catch (error) {
      alert(error);
    }
  };
  const getData = async () => {
    try {
      const name = await AsyncStorage.getItem("MyName");
      if (name !== null) {
        setName(name);
      }
    } catch (error) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const credentials = {
    email: "",
    password: "",
  };
  //   const [signUp, setSignUp] = useState({
  //     email: "",
  //     password: "",
  //   });

  const [signUp, setSignUp] = useState(credentials);

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
  AsyncStorage.getItem("MyName").then((res) => console.log(res, "name"));
  const handleSubmit = () => {
    axios
      .post("https://jiujitsux.herokuapp.com/api/users/login", signUp)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log("register error"));
  };

  return (
    <View>
      <Button title="Save name" onPress={() => storeData()} />
      <Text>Name is: {name}</Text>
      <Text>{signUp.email}</Text>
      <Text>{signUp.password}</Text>
      <Text style={styles.registerHeader}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
      ></TextInput>
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
