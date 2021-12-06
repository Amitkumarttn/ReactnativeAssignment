import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import AsyncStorageData from '@react-native-async-storage/async-storage';

import {UserIcon} from '../constant/icons';

export default class HomeScreen extends Component {
  state = {
    name: '',
    email: '',
  };
  async componentDidMount() {
    const user = await AsyncStorageData.getItem('UserValue');
    const users = JSON.parse(user);
    this.setState({
      name: users.name,
      email: users.email,
      Credential: users,
    });
    console.log(this.state.email, this.state.name);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.userContainer}>
          <Image style={styles.user} source={UserIcon} />
          <Text style={styles.name}>Hi {this.state.name}</Text>
          <Text style={styles.email}>{this.state.email}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  user: {
    width: 100,
    height: 100,
    backgroundColor: '#888',
    borderRadius: 50,
    alignSelf: 'center',
  },
  userContainer: {
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  email: {
    color: '#888',
  },
  icon: {
    marginTop: -100,
    zIndex: 12,
    position: 'absolute',
  },
});
