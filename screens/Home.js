import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Register from './Register.js'
import Login from './Login.js'
import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
  return (
    <View style={style.container}>
      <ScrollView>
      <Register/>
      <ImageBackground
        source={{
          uri:
            "https://images.pexels.com/photos/2253934/pexels-photo-2253934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        }}
        style={{
          width: "100%",
          height: 400,
          alignSelf: "center",
        }}
        // resizeMode="contain"
      ></ImageBackground>
      <Text style={style.intro}>
        There is no losing in jiu-jitsu. You either win or you learn. -Carlos
        Gracie
      </Text>
      <Login/>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  intro: {
    padding: 16,
    fontSize: 18,
    marginTop: 15,
    //   fontWeight:"bold",
    color: "cadetblue",
  },
});
