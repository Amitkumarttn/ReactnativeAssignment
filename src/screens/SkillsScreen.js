import React, {Component} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

export default class SkillsScreen extends Component {
  constructor() {
    super();
    this.state = {
      text: 'Hello!',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.count}>{this.state.text}</Text>
        <Button title="Change Text" onPress={this.funn} />
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
  count: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
