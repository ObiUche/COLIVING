import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DisplayItems from '../../components/displayItems';
import WelcomeText from '../../components/Welcome';
import SearchBar from '../../components/SearchBar';
import Spacer from '../../components/Spacer';


const HomeScreen = () => {




  return (
    <View>
      <Spacer height = {45} />
      <WelcomeText  upper = {'Co-Living'} lower={'Made Easy'}/>
      <SearchBar/>
      <DisplayItems name = {'Popular'}/>
      <DisplayItems name = {'New Uploads'} />

    </View>
  )
}


const styles = StyleSheet.create({
  WelcomeText:{
    fontWeight: 'bold',
    fontSize: 25,
    paddingBottom: 10,

  }
  
});


export default HomeScreen;