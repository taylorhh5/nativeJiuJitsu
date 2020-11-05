import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function MoveCard({ navigation, route }) {
  if (!route.params) <Text>...loading</Text>;

  return (
    <View>
      <ScrollView bounces={true} style={style.scrollView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={style.backButton}>Go Back To Move List </Text>
        </TouchableOpacity>

        {route.params ? (
          <View style={style.container}>
            <Text style={style.name}> {route.params.item.name}</Text>
            <Text style={style.description}>
              {" "}
              {route.params.item.description}
            </Text>
            <Image
              style={style.image}
              source={{ uri: route.params.item.image_url }}
            />
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
    flex: 1,
  },
  image: {
    height: 300,
    marginLeft: 0.05,
    marginRight: 0.05,
    marginVertical: 82,
    width: "100%",
  },
  scrollView: {},
  name: {
    fontSize: 28,
    alignSelf: "center",
    fontWeight: "bold",
  },
  description: {
    marginTop: 12,
    fontSize: 16,
  },
  backButton: {
    width: "100%",
    borderColor: "blue",
    fontSize: 18,
    backgroundColor: "blue",
    alignSelf: "center",
    textAlign: "center",
  },
});
