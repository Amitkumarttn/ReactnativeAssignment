import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import UserSchema from './src/database/UserSchema';
import store from './src/redux/store';

import NavigationBar from './src/routes/NavigationBar';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <NavigationBar />
        </Provider>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
