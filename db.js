import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import Realm from 'realm';
import {UUID, ObjectID} from 'bson';

const uuid = new UUID();
const user = {
  name: 'User',
  properties: {
    id: 'objectId',
    first_name: 'string',
    last_name: 'string',
    email: 'string',
    avatar: 'string',
  },
};
export default class UserSchema extends Component {
  state = {
    myUser: [],
  };
  onAddUser = () => {
    Realm.open({
      schema: [user],
    })
      .then(realm => {
        realm.write(() => {
          realm.create('User', {
            id: new ObjectID(),
            first_name: 'Amit',
            last_name: 'Kumar',
            email: 'amit@gmail.com',
            avatar: 'addadaddadasda',
          });
        });
        this.setState({myUser: [...realm.objects('User')]});
        console.log('ADD USER SUCCESSFULLY', this.state.myUser);
        realm.close();
      })
      .catch(err => {
        console.log('ERR: ', err);
      });
  };
  onShowUser = () => {
    Realm.open({
      schema: [user],
    }).then(realm => {
      this.setState({myUser: [...realm.objects('User')]});
      console.log('USER: ', realm.objects('User'));
    });
  };
  render() {
    const {myUser} = this.state;
    console.log('==>', this.state.myUser);
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title="ADD USER" onPress={this.onAddUser} />
        <Button title="SHOW USER" onPress={this.onShowUser} />
        <View>
          {myUser.map((item, index) => (
            <View>
              <Text>{index}</Text>
              <Text>{`${item.id}`}</Text>
              <Text>{item.first_name}</Text>
              <Text>{item.last_name}</Text>
              <Text>{item.avatar}</Text>
              <Text>{item.email}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
