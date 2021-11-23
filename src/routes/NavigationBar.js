import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  ProfileScreen,
  ListScreen,
  GridViewScreen,
  ListViewScreen,
} from '../screen';

const Stack = createNativeStackNavigator();

export default class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="List">
          <Stack.Screen
            name="List"
            component={ListScreen}
            options={{headerTitleAlign: 'center', title: 'Followers'}}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{headerTitleAlign: 'center', title: 'Edit Profile'}}
          />
          <Stack.Screen name="GridView" component={GridViewScreen} />
          <Stack.Screen name="ListView" component={ListViewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
