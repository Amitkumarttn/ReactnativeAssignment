import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {AvatarEditIcon} from '../constant';

const {height, width} = Dimensions.get('window');
class ProfileScreen extends Component {
  state = {
    object: this.props.route.params,
    first_name: this.props.route.params.first_name,
    last_name: this.props.route.params.last_name,
    email: this.props.route.params.email,
    username: '',
    password: '',
    date: '15',
    month: 'May',
    year: '1995',
  };
  handlePress = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const {email, username, password} = this.state;
    if (email === '' || username === '' || password === '') {
      Alert.alert('Information', 'Required all fields');
    } else if (reg.test(email) === false) {
      Alert.alert('Information!', 'Email ID is not Valid');
    } else {
      Alert.alert('Hold on!', 'Are you sure you want to Update this?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            this.state.object.first_name = this.state.first_name;
            this.state.object.last_name = this.state.last_name;
            this.state.object.email = this.state.email;
            this.props.updatedObject(this.state);
            this.props.saveData();
            this.props.navigation.goBack();
          },
        },
      ]);
      return true;
    }
  };
  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 132 : 0}
        style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image style={styles.icon} source={AvatarEditIcon} />
          <Text style={styles.name}>Some Name</Text>
          <Text style={styles.post}>Senior Designer</Text>
          <View style={styles.TextInputContainer}>
            <TextInput
              style={styles.TextInput}
              placeholder="First Name"
              value={this.state.first_name}
              onChangeText={text => {
                this.setState({first_name: text});
              }}
            />
            <TextInput
              style={styles.TextInput}
              placeholder="Last Name"
              value={this.state.last_name}
              onChangeText={text => {
                this.setState({last_name: text});
              }}
            />
            <TextInput
              style={styles.TextInput}
              placeholder="Email Address"
              value={this.state.email}
              onChangeText={text => {
                this.setState({email: text});
              }}
            />
            <TextInput
              style={styles.TextInput}
              placeholder="Username"
              value={this.state.username}
              onChangeText={text => {
                this.setState({username: text});
              }}
            />
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={text => {
                this.setState({password: text});
              }}
            />
            <View style={styles.dobContainer}>
              <TextInput
                style={styles.dob}
                placeholder="DD"
                value={this.state.date}
                onChangeText={text => {
                  this.setState({date: text});
                }}
              />
              <TextInput
                placeholder="MM"
                style={styles.dob}
                value={this.state.month}
                onChangeText={text => {
                  this.setState({month: text});
                }}
              />
              <TextInput
                placeholder="YYYY"
                value={this.state.year}
                style={styles.dob}
                onChangeText={text => {
                  this.setState({year: text});
                }}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.ButtonContainer}
            onPress={this.handlePress}>
            <Text style={styles.Btn}>CREATE</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

// const mapStateToProps = state => {
//   return {data: state.date};
// };
const mapStateToProps = state => {
  const props = {data: state.dataVal.arrData};
  console.log(state.dataVal.arrData);
  return props;
};
const mapDispatchToProps = dispatch => {
  return {
    updatedObject: data => dispatch({type: 'UPLOAD_OBJECT', payload: data}),
    saveData: () => dispatch({type: 'SAVE'}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    width: 90,
    height: 90,
    marginVertical: 20,
    alignSelf: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  post: {
    fontSize: 15,
    color: '#888',
    alignSelf: 'center',
  },
  TextInputContainer: {
    marginVertical: 20,
  },
  TextInput: {
    width: width - 50,
    height: 50,
    backgroundColor: '#fff',
    paddingLeft: 30,
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 18,
  },
  dobContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dob: {
    width: 100,
    height: 50,
    backgroundColor: '#fff',
    paddingLeft: 30,
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 10,
  },
  ButtonContainer: {
    backgroundColor: 'blue',
    width: width - 220,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  Btn: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
