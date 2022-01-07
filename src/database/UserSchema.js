import React, {Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import Realm from 'realm';

const user = {
  name: 'User',
  properties: {
    id: 'int',
    name: 'string',
    age: 'string',
    salary: 'string',
  },
};

export default class UserSchema extends Component {
  state = {
    myUser: [],
  };
  addUser = () => {
    Realm.open({
      schema: [user],
    })
      .then(realm => {
        realm.write(() => {
          realm.create('User', {
            id: 144,
            name: 'neha',
            age: '22',
            salary: '55000',
          });
        });
        // console.log('ho gya');
        console.log('==>', this.state.myUser);
        realm.close();
      })
      .catch(err => {
        console.log('ERR', err);
      });
  };
  showUser = () => {
    Realm.open({
      schema: [user],
    }).then(realm => {
      this.setState({myUser: realm.objects('User')});
      console.log('USER: ', realm.objects('User'));
    });
  };
  render() {
    const {myUser} = this.state;
    return (
      <View>
        <Button title="ADD USER" onPress={() => this.addUser()} />
        <Button title="SHOW USER" onPress={() => this.showUser()} />
        <TextInput placeholder="asdasd" />
        <View>
          {myUser.map((item, index) => (
            <View>
              <Text>{item.name}</Text>
              <Text>{item.salary}</Text>
              <Text>{item.age}</Text>
              <Text>{index}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
