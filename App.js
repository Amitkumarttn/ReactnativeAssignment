import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Navigation from './src/routes/NavigationStack';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navigation />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
