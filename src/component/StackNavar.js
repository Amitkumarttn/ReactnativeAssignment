import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ClipboardScreen, NextScreen} from '../screens';

const Stack = createNativeStackNavigator();

const StackNavar = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Clip" component={ClipboardScreen} />
          <Stack.Screen name="Next" component={NextScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default StackNavar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
