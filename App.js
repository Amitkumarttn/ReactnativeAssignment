import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'mobx-react';
import RootStore from './src/store';

import StackNavigator from './src/routes/StackNavigator';

export default class App extends Component {
  render() {
    const rootStore = new RootStore();
    return (
      <SafeAreaView style={styles.container}>
        <Provider listStore={rootStore.listStore}>
          <StackNavigator />
        </Provider>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5FDAC4',
  },
});
