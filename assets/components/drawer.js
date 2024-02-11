import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeScreen from '../src/screens/Home';
import ModifyListing from '../src/screens/ModifyListing';

const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();


const TabScreen = () => {
  return (
    <Tab.Navigator>

      <Tab.Screen name = 'Home' component={HomeScreen}/>
      
      <Tab.Screen name = 'List my Home' component={ModifyListing}/>


    </Tab.Navigator>
  );
}


export default TabScreen;