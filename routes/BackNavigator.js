import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import MoveCard from '../screens/MoveCard.js'
import Back from '../screens/Back.js'

import Header from "../Header";


const BackStack = createStackNavigator();

export default function Navigations() {
  return (
    <BackStack.Navigator>
     
      <BackStack.Screen
        name="Back"
        component={Back}
        options={() => ({
          headerTitle: () => <Header title="Back Moves" />,
        })}
      />
           <BackStack.Screen
        name="MoveCard"
        component={MoveCard}
        options={() => ({
          headerTitle: () => <Header/>,
        })}
      />

    
    </BackStack.Navigator>
  );
}
