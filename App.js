import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {AudioScreen, VideoScreen, GeolocationScreen} from './src/screens';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <GeolocationScreen />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
