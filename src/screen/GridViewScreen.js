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

  handlePress = data => {
    this.props.navigation.navigate('Profile', data);
  };
  listItem = ({item}) => (
    <TouchableOpacity
      style={styles.item}
      onLongPress={() => this.deleteActionIcon()}
      onPress={() => this.handlePress(item)}>
      {this.state.deleteIcon ? (
        <TouchableOpacity onPress={() => this.deleteAction()}>
          <Image style={styles.DeleteIcon} source={DeleteIcon} />
        </TouchableOpacity>
      ) : null}
      <Image style={styles.avatar} source={{uri: item.avatar}} />
      <Text style={styles.name}>
        {item.first_name}
        {item.last_name}
      </Text>
    </TouchableOpacity>
  );
  render() {
    const {data} = this.props;
    console.log(this.state.dataSource);
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data.data}
          renderItem={this.listItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
          }}
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
  item: {
    backgroundColor: '#F7F8F9',
    padding: 20,
    width: 150,
    borderRadius: 10,
    height: 120,
    marginVertical: 8,
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
  DeleteIcon: {
    width: 20,
    height: 20,
    tintColor: 'red',
    marginRight: -65,
    marginTop: -12,
    alignSelf: 'flex-end',
  },
});
