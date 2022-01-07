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
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {AvatarEditIcon, DeleteIcon} from '../constant';
import {getData} from '../redux/action/HomeAction';
import * as Animatable from 'react-native-animatable';

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
  deleteAction = index => {
    Alert.alert('Hold on!', 'Are you sure you want to Delete this?', [
      {
        text: 'Cancel',
        onPress: () => this.setState({deleteIcon: false}),
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          this.props.deleteUser(index);
          this.setState({deleteIcon: false});
        },
      },
    ]);
    return true;
  };
  handlePress = data => {
    this.props.navigation.navigate('Profile', data);
  };
  render() {
    const {data} = this.props;
    const listItem = ({item, index}) => (
      <SafeAreaView>
        {data.isLoading ? (
          <ActivityIndicator size="large" animating />
        ) : (
          <View>
            <Animatable.View
              animation="fadeInUp"
              duration={100}
              delay={index * 100}>
              <TouchableOpacity
                style={styles.item}
                onLongPress={() => this.deleteActionIcon()}
                onPress={() => this.handlePress(item)}>
                {this.state.deleteIcon ? (
                  <Animatable.View
                    animation="pulse"
                    iterationCount={3}
                    duration={1000}
                    direction="reverse"
                    delay={300}>
                    <TouchableOpacity
                      style={styles.deleteIconContainer}
                      onPress={() => this.deleteAction(index)}>
                      <Image style={styles.DeleteIcon} source={DeleteIcon} />
                    </TouchableOpacity>
                  </Animatable.View>
                ) : null}
                <Image style={styles.avatar} source={{uri: item.avatar}} />
                <Text style={styles.name}>
                  {[item.first_name, ' ', item.last_name]}
                </Text>
              </TouchableOpacity>
            </Animatable.View>
          </View>
        )}
      </SafeAreaView>
    );
    return (
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={listItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const props = {data: state.dataVal.arrData};
  return props;
};

const mapDispatchToProps = dispatch => {
  return {
    fetchApi: () => getData(dispatch),
    deleteUser: index => dispatch({type: 'DELETE_USER', payload: index}),
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
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
