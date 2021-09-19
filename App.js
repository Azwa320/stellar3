import { StackView } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DailyPic from './Screens/DailyPic';
import SpaceCrafts from './Screens/SpaceCrafts';
import StarMap from './Screens/StarMap';
export default function App() {
  return (
    <NavigationContainer>
<Stack.Navigator initialRouteName="Home" screenOptions={{
   headerShown:false
}}>

  <Stack.Screen name="Home" component={HomeScreen}/>
  <Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen}/>
  <Stack.Screen name="StarMap" component={StarMapScreen}/>
  <Stack.Screen name="DailyPic" component={DailyPicScreen}/>
</Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
