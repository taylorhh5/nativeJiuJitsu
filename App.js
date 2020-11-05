import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Takedowns from "./screens/Takedowns.js";
import Mount from "./screens/Mount.js";
import MoveCard from "./screens/MoveCard.js";
import Home from "./screens/Home";
import Sidemount from "./screens/Sidemount.js";
import Back from "./screens/Back.js";
import Guard from "./screens/Guard.js";
import HomeNavigation from "./routes/HomeNavigation.js";


const Drawer = createDrawerNavigator();

//Navigation Conatiner > Drawer Navigation > Drawer Screen
//Whichever Drawer.Screen Component first is home page
//Home Page and About components actually coming from homestack navigatior in routes folder. This gives these pages homestack hamburger
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#FF6D00",
          },
          headerTintColor: "#ffff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Drawer.Screen name="Home" component={HomeNavigation} />
        <Drawer.Screen name="Takedowns" component={Takedowns} />
        <Drawer.Screen name="Mount" component={Mount} />
        <Drawer.Screen name="Back" component={Back} />
        <Drawer.Screen name="Sidemount" component={Sidemount} />
        <Drawer.Screen name="Guard" component={Guard} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
