import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function MoveCard({ navigation, route }) {
  if (!route.params) <Text>...loading</Text>;
//   console.log(route, "ROUTEEEEEE");
  // <Text> {route.params.item.title}</Text>
  // <Text> {route.params.item.body}</Text>
  // <Text> Rating:{route.params.item.rating}</Text>
  return (
    <View>
     <ScrollView bounces={true} style={style.scrollView}>
      <Button
        title="Back to Moves"
        onPress={() => navigation.goBack()}
        style={{width: 400, height: 400, marginTop:0,  alignSelf:"center"}}
      />
      {/* <Button
      title="React Native by Example"
      onPress={() =>
        navigation.navigate("Home Page", { name: "React Native by Example " })
      } */}
      {/* /> */}
      {route.params ? (
        <View style={style.container}>
          <Text style={style.name}> {route.params.item.name}</Text>
          <Text style={style.description}> {route.params.item.description}</Text>
          <Image style={style.image} source = {{uri: route.params.item.image_url}}/>
          {/* <Image style={style.image} source={route.params.item.image_url ? {uri: route.params.item.image_url } : null}/> */}

        </View>
      ) : null}
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    padding: 24,
  },
  image: {
    height:500,
    marginLeft:0.05,
    marginRight:0.05,
    marginVertical: 82,
},
scrollView: {

  },
  name:{
    fontSize:28,
    alignSelf:"center",
    fontWeight:"bold",
      },
  description:{
      marginTop:12,
    fontSize:16
  }
});
