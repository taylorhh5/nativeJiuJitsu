import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function Guard(props) {
  const [guard, setGuard] = useState([]);

  useEffect(() => {
    GetApi();
  }, []);

  function GetApi() {
    axios
      .get("https://jiujitsux.herokuapp.com/api/moves/guard")
      .then(function (response) {
        setGuard(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //Passing Reviews to Flatlist as Data.
  //Rendering data in ReviewDetails Component (We named "Review" in App.js Draw.Screen)
  return (
    <View style={style.container}>
      <Text style={style.greeting}>
        You have chosen to pull your opponent into guard!
      </Text>
      <Text style={style.choose}>
        Choose the type of guard move you'd like to use.
      </Text>
      <FlatList
        style={style.listContainer}
        data={guard}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate({ name: "MoveCard", params: { item } })
            }
          >
            <Text style={style.title}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  listContainer: {
    alignSelf: "center",
    marginTop: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 8,
    color: "blue",
  },
  greeting: {
    fontSize: 18,
    marginTop: 5,
    alignSelf: "center",
  },
  choose: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 15,
    alignSelf: "center",
  },
});
