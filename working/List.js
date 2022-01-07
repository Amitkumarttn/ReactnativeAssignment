import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  SafeAreaView,
  SectionList,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Platform,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {AvatarEditIcon, DeleteIcon} from '../constant';
import {getData} from '../redux/action/HomeAction';

const {width, height} = Dimensions.get('window');

class ListViewScreen extends Component {
  state = {
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
        <TouchableOpacity
          style={styles.deleteIconContainer}
          onPress={() => this.deleteAction()}>
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
    return (
      <SafeAreaView>
        <FlatList
          data={data.data}
          renderItem={this.listItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const props = {data: state.dataVal.arrData};
  // console.log(state.dataVal.arrData);
  return props;
};

const mapDispatchToProps = dispatch => {
  return {
    fetchApi: () => getData(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListViewScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#F7F8F9',
    flexDirection: 'row',
    marginVertical: 8,
    alignItems: 'center',
    borderRadius: 5,
    height: 50,
    width: 400,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
    width: width - 40,
  },
  title: {
    fontSize: 18,
    marginLeft: 20,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginHorizontal: 30,
  },
  deleteIconContainer: {
    backgroundColor: '#888',
    width: 25,
    height: 25,
    borderRadius: 50,
    justifyContent: 'center',
  },
  DeleteIcon: {
    width: 15,
    height: 15,
    tintColor: '#fff',
    alignSelf: 'center',
  },
});
