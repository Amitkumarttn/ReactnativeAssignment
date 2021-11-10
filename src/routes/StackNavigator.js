import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen, AddScreen} from '../screens';

const Stack = createNativeStackNavigator();

export default class StackNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{
              title: 'Simple Note Taker',
              headerStyle: {backgroundColor: '#5FDAC4'},
              headerBackVisible: false,
              headerTitleAlign: 'center',
            }}
            component={HomeScreen}
          />
          <Stack.Screen
            name="Update"
            options={{
              title: 'Add a new note',
              headerStyle: {backgroundColor: '#5FDAC4'},
              headerBackVisible: false,
              headerTitleAlign: 'center',
            }}
            component={AddScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
