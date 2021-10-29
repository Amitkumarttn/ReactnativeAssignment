import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';

import store from './src/Redux/Store';
import Home from './src/screens/Home';

import StackNavigator from './src/routes/StackNavigator';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <StackNavigator />
        </Provider>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
