import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  SafeAreaView,
  SectionList,
  StyleSheet,
  StatusBar,
  Alert,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {getData} from '../redux/action/HomeAction';
import {DeleteIcon} from '../constant';

class GridViewScreen extends Component {
  state = {
    dataSource: [],
    deleteIcon: false,
  };
  componentDidMount() {
    this.props.fetchApi();
  }

  deleteActionIcon = () => {
    this.setState({
      deleteIcon: true,
    });
  };
  deleteAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to Delete this?', [
      {
        text: 'Cancel',
        onPress: () => this.setState({deleteIcon: false}),
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          Alert.alert('Successful', 'Deleted');
        },
      },
    ]);
    return true;
  };

  handlePress = item => {
    this.props.navigation.navigate('Profile', item);
  };
  listItem = ({item}) => (
    <TouchableOpacity
      style={styles.item}
      onLongPress={() => this.deleteActionIcon()}
      onPress={() => this.handlePress(item)}>
      {this.state.deleteIcon ? (
        <TouchableOpacity
          style={styles.deleteIconContainer}
          onPress={() => this.deleteAction()}>
          <Image style={styles.DeleteIcon} source={DeleteIcon} />
        </TouchableOpacity>
      ) : null}
      <Image style={styles.avatar} source={{uri: item.avatar}} />
      <Text style={styles.name}>{[item.first_name, ' ', item.last_name]}</Text>
    </TouchableOpacity>
  );
  render() {
    const {data} = this.props;
    console.log(this.state.dataSource);
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data.data}
          numColumns={2}
          renderItem={this.listItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const props = {data: state.dataVal.arrData};
  console.log(state.dataVal.arrData);
  return props;
};

const mapDispatchToProps = dispatch => {
  return {
    fetchApi: () => getData(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GridViewScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  name: {
    marginVertical: 10,
    fontWeight: 'bold',
    color: '#888',
  },
  item: {
    backgroundColor: '#F7F8F9',
    padding: 20,
    width: 160,
    borderRadius: 10,
    height: 120,
    marginVertical: 8,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  deleteIconContainer: {
    backgroundColor: '#888',
    width: 25,
    height: 25,
    borderRadius: 50,
    justifyContent: 'center',
    marginTop: 10,
    alignSelf: 'flex-start',
    marginLeft: 10,
    position: 'absolute',
  },
  DeleteIcon: {
    width: 15,
    height: 15,
    tintColor: '#fff',
    alignSelf: 'center',
  },
});
