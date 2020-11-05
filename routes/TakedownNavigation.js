import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import MoveCard from '../screens/MoveCard.js'
import Takedowns from '../screens/Takedowns.js'

import Header from "../Header";


const TakedownStack = createStackNavigator();

export default function Navigations() {
  return (
    <TakedownStack.Navigator>
     
      <TakedownStack.Screen
        name="Takedown"
        component={Takedowns}
        options={() => ({
          headerTitle: () => <Header title="Takedowns" />,
        })}
      />
           <TakedownStack.Screen
        name="MoveCard"
        component={MoveCard}
        options={() => ({
          headerTitle: () => <Header/>,
        })}
      />

    
    </TakedownStack.Navigator>
  );
}
