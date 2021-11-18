import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AddScreen, ListingScreen, SortScreen} from '../screens';
import {Text, TouchableOpacity} from 'react-native';

const Stack = createNativeStackNavigator();

export default class Navigation extends Component {
  onPressHandle = navigation => {
    navigation.navigate('Add');
  };
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="List"
            component={ListingScreen}
            options={({route, navigation}) => ({
              headerBackVisible: false,
              headerTitleAlign: 'center',
              headerTitle: 'Employee screen',
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => this.onPressHandle(navigation)}>
                  <Text>Add Employe</Text>
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Add"
            component={AddScreen}
            options={{
              headerTitleAlign: 'center',
              headerTitle: 'Add employee screen',
            }}
          />
          <Stack.Screen
            name="Sort"
            component={SortScreen}
            options={{
              headerTitleAlign: 'center',
              headerTitle: 'Sorted Data',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
