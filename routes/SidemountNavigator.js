import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import MoveCard from '../screens/MoveCard.js'
import Sidemount from '../screens/Sidemount.js'

import Header from "../Header";


const SidemountStack = createStackNavigator();

export default function Navigations() {
  return (
    <SidemountStack.Navigator>
     
      <SidemountStack.Screen
        name="Sidemount"
        component={Sidemount}
        options={() => ({
          headerTitle: () => <Header title="Sidemount Moves" />,
        })}
      />
           <SidemountStack.Screen
        name="MoveCard"
        component={MoveCard}
        options={() => ({
          headerTitle: () => <Header/>,
        })}
      />

    
    </SidemountStack.Navigator>
  );
}
