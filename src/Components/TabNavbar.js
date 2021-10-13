import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {
    HomeScreen,
    CategoriesScreen,
    MyCartScreen,
    WishListScreen,
    AccountScreen
} from '../Screens'

const Tab = createBottomTabNavigator();


const TabNavbar = () => {
    return (
        <NavigationContainer style={styles.container}>
      <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#888'
      }}
      >

        <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
            headerTitle: 'MEN CLOTHING',
            title: 'Home',
          tabBarIcon: ({focused}) => (
            <Image 
            style={[styles.icon, {tintColor: focused? '#dc143c' : '#888'}]}
            source={require('../Images/Icons/Home.png')} />
          )
        }}
        />
        <Tab.Screen 
        name="Categories" 
        component={CategoriesScreen} 
        options={{
          title: 'Categories',
          tabBarIcon: () => (
            <Image 
            style={styles.icon}
            source={require('../Images/Icons/Categories.png')} />
          )
        }}
        />
        <Tab.Screen 
        name="Cart" 
        component={MyCartScreen} 
        options={{
          title: 'My Cart',
          tabBarIcon: () => (
            <Image 
            style={styles.icon}
            source={require('../Images/Icons/Cart.png')} />
          )
        }}
        />
        <Tab.Screen 
        name="WishList" 
        component={WishListScreen} 
        options={{
          title: 'Wishlist',
          tabBarIcon: () => (
            <Image 
            style={styles.Hearticon}
            source={require('../Images/Icons/Heart.png')} />
          )
        }}
        />
        <Tab.Screen 
        name="Account" 
        component={AccountScreen} 
        options={{
          title: 'Account',
          tabBarIcon: () => (
            <Image 
            style={styles.icon}
            source={require('../Images/Icons/Account.png')} />
          )
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    )
}

export default TabNavbar

const styles = StyleSheet.create({
    
    icon: {
        width: 30,
        height: 30
      },
      Hearticon: {
        width: 60,
        height: 60
      }
})
