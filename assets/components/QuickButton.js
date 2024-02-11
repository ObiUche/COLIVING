import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const QuickButton = ({name, action}) => {
  return (
    <TouchableOpacity onPress={action}>
      <View style = {styles.ButtonStyles}> 
      <Text  style = {styles.Text}>{name}</Text>
    </View>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  ButtonStyles: {
    height: 40,
    borderColor: '#bababa',
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 5,
    flexDirection: 'row',
    margin: 5,
    backgroundColor: '#bababa',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 2, 
    elevation: 3

   
  
  },

  Text: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500',


  }
})



export default QuickButton;