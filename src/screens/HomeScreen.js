import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import {Close} from '../constant';
@inject('listStore')
@observer
export default class HomeScreen extends Component {
  pressDeleteHandler = (index) => {
    Alert.alert('Hold on!', 'Are you sure you want to delete?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          this.props.listStore.removeList(index);
        },
      },
    ]);
    return true;
  };
  render() {
    const {listStore} = this.props;
    return (
      <View style={styles.container}>
        {listStore.lists.length == 0 ? (
          <NoList />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
            {listStore.lists.map((val, index) => (
              <TouchableOpacity
                key={index}
                style={styles.list}
                onLongPress={() => this.pressDeleteHandler(index)}
                onPress={() =>
                  this.props.navigation.navigate('Update', {
                    id: index,
                    title: val.title,
                    body: val.body,
                  })
                }>
                <Text>{val.title}</Text>
                <Text>{val.body}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Update', {
              id: '',
              title: '',
              body: '',
            })
          }
          style={styles.tick}>
          <Image style={styles.icon} source={Close} />
          <Text style={styles.txt}>ADD NEW NOTE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const NoList = () => (
  <View style={styles.noList}>
    <Text style={styles.noListText}>No Note, Add Note To Get Started</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tick: {
    backgroundColor: '#5FDAC4',
    borderRadius: 50,
    width: 160,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.4,
    elevation: 1,
    position: 'absolute',
    zIndex: 1,
    bottom: 20,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    right: 20,
  },
  icon: {
    width: 15,
    height: 15,
    left: -8,
    transform: [{rotate: '45deg'}],
  },
  txt: {
    fontSize: 12,
  },
  noList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noListText: {
    fontSize: 22,
    color: '#156e9a',
  },
  list: {
    margin: 20,
    padding: 20,
    marginBottom: -10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  body: {
    fontSize: 12,
    color: '#888',
  },
});
