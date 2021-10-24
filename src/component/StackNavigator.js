import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorageData from '@react-native-async-storage/async-storage';

//Importing Screens
import {SignupScreen, HomeScreen} from '../screens';
//Importing Icons
import {ExitIcon} from '../constant/icons';

const Stack = createNativeStackNavigator();

export default class StackNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Signup"
            component={SignupScreen}
          />
          <Stack.Screen
            options={({route, navigation}) => ({
              headerBackVisible: false,
              headerTitleAlign: 'center',
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert(
                      'Hold on!',
                      'Are you sure you want to logout?',
                      [
                        {
                          text: 'Cancel',
                          onPress: () => null,
                          style: 'cancel',
                        },
                        {
                          text: 'Yes',
                          onPress: () => {
                            try {
                              AsyncStorageData.clear();
                            } catch (e) {
                              console.log(e);
                            }
                            console.log('Logout Successfully');
                            Alert.alert('Successful', 'Logout Successful');
                            navigation.navigate('Signup');
                          },
                        },
                      ],
                    );
                    return true;
                  }}>
                  <Image style={styles.icons} source={ExitIcon} />
                </TouchableOpacity>
              ),
            })}
            name="Home"
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  icons: {
    height: 20,
    width: 20,
  },
  back: {
    color: '#fff',
  },
});
