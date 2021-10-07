import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

import Home from './src/screens/HomeArrowFunction';
import Functional from './src/screens/ClassComponent';

export default function App() {
  return (
    <>
    <View style={styles.container}>
        <SafeAreaView>
          <Functional />
        </SafeAreaView>
    </View>
    </>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
