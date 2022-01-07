import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';

import StackNavigator from './src/components/StackNavigation';
import TabNavigator from './src/components/TabNavigator';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TabNavigator />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
