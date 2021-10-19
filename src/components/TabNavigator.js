import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Importing Screens
import {
  HomeScreen,
  CategoriesScreen,
  MyCartScreen,
  WishListScreen,
  AccountScreen,
} from '../screens';

// Importing Icons
import {
  HomeIcon,
  CartIcon,
  AccountIcon,
  HeartIcon,
  CategoryIcon,
} from '../constants/Icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Account"
        screenOptions={{
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#888',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: 'My Application',
            title: 'Home',
            tabBarIcon: () => <Image style={styles.icon} source={HomeIcon} />,
          }}
        />
        <Tab.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            headerTitle: 'My Application',
            title: 'Categories',
            tabBarIcon: () => (
              <Image style={styles.icon} source={CategoryIcon} />
            ),
          }}
        />
        <Tab.Screen
          name="MyCart"
          component={MyCartScreen}
          options={{
            headerTitle: 'My Application',
            title: 'My Cart',
            tabBarIcon: () => <Image style={styles.icon} source={CartIcon} />,
          }}
        />
        <Tab.Screen
          name="Wishlist"
          component={WishListScreen}
          options={{
            headerTitle: 'My Application',
            title: 'Wishlist',
            tabBarIcon: () => <Image style={styles.icon} source={HeartIcon} />,
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            headerTitle: 'My Application',
            title: 'Account',
            headerShown: false,
            tabBarIcon: () => (
              <Image style={styles.icon} source={AccountIcon} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default TabNavigator;

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});
