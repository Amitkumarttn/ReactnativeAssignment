import React, {Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';

import StackNavar from './src/component/StackNavar';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StackNavar />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
