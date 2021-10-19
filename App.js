import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

import StackNavigator from './src/components/StackNavigation';
import TabNavigator from './src/components/TabNavigator';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TabNavigator />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
