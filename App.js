import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

//Importing Stack Navigator
import StackNavigator from './src/component/StackNavigator';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StackNavigator />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  },
});
