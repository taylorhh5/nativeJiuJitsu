import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import MoveCard from '../screens/MoveCard.js'
import Takedowns from '../screens/Takedowns.js'

import Header from "../Header";


const HomeStack = createStackNavigator();

export default function Navigations() {
  return (
    <HomeStack.Navigator>
     
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={() => ({
          headerTitle: () => <Header title="Brazilian Jiu-Jitsu Trainer" />,
        })}
      />
           <HomeStack.Screen
        name="MoveCard"
        component={MoveCard}
        options={() => ({
          headerTitle: () => <Header/>,
        })}
      />

    
    </HomeStack.Navigator>
  );
}
