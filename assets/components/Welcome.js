import React from 'react'
import {Text, View, StyleSheet} from 'react-native';

const WelcomeText = ({upper, lower}) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.upper}>{upper}</Text>
      <Text style = {styles.lower}>{lower}</Text>
    </View>
  )
};


const styles = StyleSheet.create({
  upper:{
    fontSize: 30,
    fontWeight: '200'
  },
  lower: {
    fontSize: 30,
    fontWeight: '600'
  },
  container:{
    padding: 10,
  }
});


export default WelcomeText;