import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Header(  {title} ) {
const navigation = useNavigation();

  const openMenu = () => {
    navigation.openDrawer();
  }


  return (
    <View style={styles.header}>
      <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {      
        width:Dimensions.get('screen').width,
        height: '100%',
        flexDirection: 'row',
        flex:1,
        alignItems: 'center',
    },
    headerText: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#333',
      letterSpacing: 1,
      height: '100%',
      alignItems:"center",
    },
    icon: {
      position: 'relative',
      marginLeft: 5,
      flexDirection:'column',
      flex:0.5
    }
  });