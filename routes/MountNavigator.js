import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import MoveCard from '../screens/MoveCard.js'
import Mount from '../screens/Mount.js'

import Header from "../Header";


const MountStack = createStackNavigator();

export default function Navigations() {
  return (
    <MountStack.Navigator>
     
      <MountStack.Screen
        name="Mount"
        component={Mount}
        options={() => ({
          headerTitle: () => <Header title="Mount Moves" />,
        })}
      />
           <MountStack.Screen
        name="MoveCard"
        component={MoveCard}
        options={() => ({
          headerTitle: () => <Header/>,
        })}
      />

    
    </MountStack.Navigator>
  );
}
