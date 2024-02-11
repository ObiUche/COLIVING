import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';


const UserInput =  ({question, placeholder}) => {
  
  return (

  <View >
  <Text style = {styles.Header}> {question}</Text>
  
    <TextInput 
    style = {styles.Input}
    placeholder= {placeholder}
     />
  </View>
  )
};



const styles = StyleSheet.create({
  Input: {
    height: 40,
    borderColor: '#bababa',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 5,
    flexDirection: 'row',
    margin: 5,
    
   
  
  },

  Header: {
    fontSize: 15,
    padding: 5,
    fontWeight: '300'
  }
}
    
    
    );


export default UserInput;
