import React, {Component} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import AsyncStorageData from '@react-native-async-storage/async-storage';

export default class SplashScreen extends Component {
  state = {
    data: null,
  };
  async componentDidMount() {
    const user = await AsyncStorageData.getItem('UserValue');
    const users = JSON.parse(user);
    this.setState({
      data: users,
    });
    console.log('USERS', users);
    console.log('User Data===', this.state.data);
    this.state.data === null
      ? this.props.navigation.navigate('Signup')
      : this.props.navigation.navigate('Home');
  }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text> Please Wait... </Text>
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
