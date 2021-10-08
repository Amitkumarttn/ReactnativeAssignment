import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from './src/Screens/Home';
import ProfileScreen from './src/Screens/Profile';
// import DetailsScreen from './src/Screens/Details';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator 
    screenOptions={{
      tabBarShowLabel: false
    }}
    >

      <Tab.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{
        title: 'My Home',
        tabBarIcon: () => (
          <Image
          style={styles.icon}
          source={require('./src/assets/Images/Icons/home.png')} />
        )
      }}
      />

      

      <Tab.Screen 
      name="Profile" 
      component={ProfileScreen} 
      // options={({ route }) => ({ title: route.params.user })}
      options={({ route }) => ({ title: route.params.user, tabBarIcon: () => (
        <Image
          style={styles.icon}
          source={require('./src/assets/Images/Icons/profile.png')} />
      ) })}
      />
    </Tab.Navigator>
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
  icon: {
    width: 20,
    height: 20
  }
});
