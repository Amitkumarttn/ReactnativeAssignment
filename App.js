import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

//Importing Screen
import {
  DraggableBall,
  MapScreen,
  TouchInfoScreen,
  MultiLocationScreen,
} from './src/screens';

const App = () => {
  return (
    <SafeAreaView>
      <MultiLocationScreen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
