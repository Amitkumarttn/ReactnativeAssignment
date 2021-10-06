import React from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';

//Importing Screen
import Home from './src/screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    
  },
});
