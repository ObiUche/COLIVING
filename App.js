import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import HomeScreen from './assets/src/screens/Home';
import ModifyListing from './assets/src/screens/ModifyListing';

const Tab = createBottomTabNavigator();


function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Add Listing" component={ModifyListing} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
