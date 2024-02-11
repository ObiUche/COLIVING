import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const SearchBar = () => {
  return (
    <View style = {styles.container}>


      <TextInput style = {styles.input}
      placeholder='Discover rooms for rent ...'
      />
      
      <Ionicons   name="ios-search-outline"  style = {styles.Icon}/>

    </View>
  )

};

const styles = StyleSheet.create({
  container: {
    height: 45,
    borderColor: '#bababa',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 5,
    flexDirection: 'row',
    margin: 5
  
  },
  input:{
    flex: 1,
    fontSize: 15,

  },
  Icon: {
    alignSelf:'center',
    paddingRight: 5,
    color: '#bababa',
    fontSize: 25,
   }
});

export default SearchBar;

