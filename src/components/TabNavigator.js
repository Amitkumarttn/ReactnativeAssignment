import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Importing Screens
import {
  HomeScreen,
  ItemsScreen,
  SkillsScreen,
  ProfileScreen,
  AboutScreen,
} from '../screens';

// Importing Icons
import {
  HomeIcon,
  CartIcon,
  AccountIcon,
  SortIcon,
  CategoryIcon,
} from '../constants/Icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
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
          name="Item"
          component={ItemsScreen}
          options={{
            headerTitle: 'My Application',
            title: 'Item',
            tabBarIcon: () => <Image style={styles.icon} source={CartIcon} />,
          }}
        />
        <Tab.Screen
          name="Skills"
          component={SkillsScreen}
          options={{
            headerTitle: 'My Application',
            title: 'Skills',
            tabBarIcon: () => <Image style={styles.icon} source={SortIcon} />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerTitle: 'My Application',
            title: 'Profile',
            tabBarIcon: () => (
              <Image style={styles.icon} source={CategoryIcon} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            headerTitle: 'My Application',
            title: 'About',
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
