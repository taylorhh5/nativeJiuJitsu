import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

export default function MoveCard({ navigation, route }) {
  if (!route.params) <Text>...loading</Text>;
//   console.log(route, "ROUTEEEEEE");
  // <Text> {route.params.item.title}</Text>
  // <Text> {route.params.item.body}</Text>
  // <Text> Rating:{route.params.item.rating}</Text>
  return (
    <View>
      <Text>Review Screen</Text>
      {/* <Button
        title="Home page"
        onPress={() => navigation.navigate("Home Page")}
      /> */}
      {/* <Button
      title="React Native by Example"
      onPress={() =>
        navigation.navigate("Home Page", { name: "React Native by Example " })
      } */}
      {/* /> */}
      {route.params ? (
        <View style={style.container}>
          <Text> {route.params.item.name}</Text>
          <Text> {route.params.item.description}</Text>
          <Image style={style.image} source = {{uri: route.params.item.image_url}}/>
          {/* <Image style={style.image} source={route.params.item.image_url ? {uri: route.params.item.image_url } : null}/> */}

        </View>
      ) : null}
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
});
