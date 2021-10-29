import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';

class Home extends Component {
  fetchPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        return this.props.fetchAPI(data);
      })
      .catch(err => console.log(err));
  };
  componentDidMount() {
    this.fetchPosts();
  }

  handlePress = data => {
    this.props.navigation.navigate('Details', data);
  };

  render() {
    const Item = ({item}) => (
      <TouchableOpacity onPress={() => this.handlePress(item)}>
        <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.body}>{item.body}</Text>
        </View>
      </TouchableOpacity>
    );
    const renderItem = ({item}) => <Item item={item} />;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>List of Items</Text>
        <FlatList
          data={this.props.data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAPI: val => dispatch({type: 'DATA_LOADED', payload: {val}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontWeight: '600',
    fontSize: 22,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
  },
  title: {
    fontSize: 22,
    color: '#0B3861',
  },
  body: {
    fontSize: 12,
    color: '#888',
  },
});
