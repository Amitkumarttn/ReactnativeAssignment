import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import store from '../Redux/Store';

const {width, height} = Dimensions.get('window');

class Details extends Component {
  state = {
    object: this.props.route.params,
    title: this.props.route.params.title,
    body: this.props.route.params.body,
  };
  handlePress = () => {
    Alert.alert('Hold on!', 'Are you sure you want to Update this?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          this.state.object.title = this.state.title;
          this.state.object.body = this.state.body;
          this.props.updatedObject(this.state);
          this.props.saveData();
          this.props.navigation.navigate('Home');
        },
      },
    ]);
    return true;
  };

  changeTitle = text => {
    this.setState({title: text});
  };

  changeBody = text => {
    this.setState({body: text});
  };
  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
        style={styles.container}>
        <Text> Details Screen </Text>
        <View style={styles.TextInput}>
          <TextInput
            placeholder="title"
            value={this.state.title}
            multiline
            onChangeText={text => {
              this.changeTitle(text);
            }}
          />
        </View>
        <View style={styles.TextInputDesc}>
          <TextInput
            placeholder="body"
            multiline
            value={this.state.body}
            onChangeText={text => {
              this.changeBody(text);
            }}
          />
        </View>
        <TouchableOpacity style={styles.savebtn} onPress={this.handlePress}>
          <Text>Update</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
  TextInput: {
    borderWidth: 2,
    borderColor: '#888',
    width: width - 50,
    height: 80,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  TextInputDesc: {
    borderWidth: 2,
    borderColor: '#888',
    width: width - 50,
    height: 150,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 20,
    paddingLeft: 20,
  },
  savebtn: {
    width: width - 100,
    height: 40,
    backgroundColor: '#3fbad9',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  return {data: state.data};
};

const mapDispatchToProps = dispatch => {
  return {
    updatedObject: data => dispatch({type: 'UPLOAD_OBJECT', payload: data}),
    saveData: () => dispatch({type: 'SAVE'}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Details);
