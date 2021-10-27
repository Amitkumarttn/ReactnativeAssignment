import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';

import Counter from './src/components/Counter';
import store from './src/Redux/Store';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <Counter />
        </Provider>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B424E',
  },
});
