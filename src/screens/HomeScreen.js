import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import {UserIcon} from '../constant/icons';

export default class HomeScreen extends Component {
  render() {
    const params = this.props.route.params;
    const user_name = params.user_name;
    const email_id = params.email_id;
    return (
      <View style={styles.container}>
        <View style={styles.userContainer}>
          <Image style={styles.user} source={UserIcon} />
          <Text>{JSON.stringify(user_name)}</Text>
          <Text>{JSON.stringify(email_id)}</Text>
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
