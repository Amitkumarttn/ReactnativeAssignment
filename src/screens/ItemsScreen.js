import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

export default class ItemsScreen extends Component {
  constructor() {
    super();
    this.state = {
      text: 'Hello',
    };
  }

  funn = () => {
    this.setState({
      text: 'Amit Mehta',
    });
  };

  reset = () => {
    this.setState({
      text: 'Hello',
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.text}</Text>
        <Button title="Click me" onPress={this.funn} />
        <Button title="Reset" onPress={this.reset} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
