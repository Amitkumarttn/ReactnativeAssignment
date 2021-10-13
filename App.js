import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

//Importing the file

import SectionList from './src/screens/SectionList';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
