import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import MoveCard from '../screens/MoveCard.js'
import Guard from '../screens/Guard.js'

import Header from "../Header";


const GuardStack = createStackNavigator();

export default function Navigations() {
  return (
    <GuardStack.Navigator>
     
      <GuardStack.Screen
        name="Guard"
        component={Guard}
        options={() => ({
          headerTitle: () => <Header title="Guard Moves" />,
        })}
      />
           <GuardStack.Screen
        name="MoveCard"
        component={MoveCard}
        options={() => ({
          headerTitle: () => <Header/>,
        })}
      />

    
    </GuardStack.Navigator>
  );
}
