import React, { useState, useEffect } from "react";
import axios from 'axios';

import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";


export default function Sidemount(props) {


  const [sidemount, setSidemount] = useState([])

  useEffect(() => {
    getNewsFromAPI()
}, [])

  
function getNewsFromAPI() {
  axios.get('https://jiujitsux.herokuapp.com/api/moves/sidemount')
      .then( function (response) {
        setSidemount(response.data);
      })
      .catch(function (error) {
          console.log(error)
      })
}
  // console.log(clothing, "CLOTHING DATA")

  //Passing Reviews to Flatlist as Data.
  //Rendering data in ReviewDetails Component (We named "Review" in App.js Draw.Screen)
  return (
    <View style={style.container}>
      {/* <Button
        title="Go to about page"
        onPress={() => props.navigation.navigate("About")}
      /> */}

      <FlatList
        style={style.listContainer}
        data={sidemount}
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
    // backgroundColor: "yellow",
  },
  listContainer: {
    alignSelf: "center",
    marginTop: 15,
  },
  title:{
    fontWeight:"bold",
    fontSize:20,
    marginTop:8,
    color:"blue",
  }
});
