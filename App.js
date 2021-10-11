import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import WebViewTask from './src/Screen/Task1/WebView';
import SwitchTask from './src/Screen/Task2/Switch';
import FlatlistPagination from './src/Screen/Task3/FlatlistPagination';

export default function App() {
  return (
    <View style={styles.container}>
     <StatusBar />
      <SwitchTask />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
});
