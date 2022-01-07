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
import {AvatarEditIcon, SaveIcon, EditIcon} from '../constant';

const {height, width} = Dimensions.get('window');
class ProfileScreen extends Component {
  state = {
    object: this.props.route.params,
    id: this.props.route.params.id,
    first_name: this.props.route.params.first_name,
    last_name: this.props.route.params.last_name,
    email: this.props.route.params.email,
    avatar: this.props.route.params.avatar,
    username: '@Example.com',
    password: 'something',
    date: '15',
    month: 'May',
    year: '1995',
    isEdit: true,
    isSave: false,
    handleFirstNameEditable: false,
    handleLastNameEditable: false,
  };
  handlePress = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const {first_name, last_name, email, username, password} = this.state;
    if (
      email === '' ||
      username === '' ||
      password === '' ||
      first_name === '' ||
      last_name === ''
    ) {
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
  handleEditIcon = () => {
    this.setState({
      isEdit: false,
      isSave: true,
      handleFirstNameEditable: true,
      handleLastNameEditable: true,
    });
  };
  handleSaveIcon = () => {
    this.setState({
      isEdit: true,
      isSave: false,
      handleFirstNameEditable: false,
      handleLastNameEditable: false,
    });
  };
  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 132 : 0}
        style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.state.avatar ? (
            <Image
              style={styles.avatarIcon}
              source={{uri: this.state.avatar}}
            />
          ) : (
            <Image style={styles.avatarIcon} source={AvatarEditIcon} />
          )}
          {this.state.isEdit ? (
            <TouchableOpacity
              onPress={() => this.handleEditIcon()}
              style={styles.editIconContainer}>
              <Image style={styles.icons} source={EditIcon} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => this.handleSaveIcon()}
              style={styles.editIconContainer}>
              <Image style={styles.icons} source={SaveIcon} />
            </TouchableOpacity>
          )}
          <View style={styles.TextInputContainer}>
            <TextInput
              focusable
              editable={this.state.handleFirstNameEditable}
              style={
                this.state.handleFirstNameEditable
                  ? styles.TextEditInput
                  : styles.firstNameTextInput
              }
              placeholder="First Name"
              value={this.state.first_name}
              onChangeText={text => {
                this.setState({first_name: text});
              }}
            />
            <TextInput
              editable={this.state.handleLastNameEditable}
              style={
                this.state.handleLastNameEditable
                  ? styles.TextEditInput
                  : styles.lastNameTextInput
              }
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
            <Text style={styles.Btn}>UPDATE</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => {
  const props = {data: state.dataVal.arrData};
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
  avatarIcon: {
    width: 120,
    height: 120,
    borderRadius: 80,
    marginVertical: 20,
    alignSelf: 'center',
  },
  editIconContainer: {
    position: 'absolute',
    marginVertical: 110,
    alignSelf: 'center',
    backgroundColor: '#4B95CD',
    padding: 8,
    borderRadius: 50,
  },
  icons: {
    width: 20,
    height: 20,
    tintColor: '#eee',
  },
  TextInputContainer: {
    marginVertical: -10,
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
  firstNameTextInput: {
    width: width - 250,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: Platform.OS === 'android' ? -15 : null,
    marginBottom: Platform.OS === 'android' ? -21 : null,
  },
  TextEditInput: {
    width: width - 250,
    alignSelf: 'center',
    fontSize: 20,
    borderColor: '#888',
    borderBottomWidth: 1,
    marginBottom: 30,
  },
  lastNameTextInput: {
    width: width - 250,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 15,
    color: '#888',
    marginBottom: Platform.OS === 'ios' ? 30 : null,
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
    backgroundColor: '#4B95CD',
    width: width - 220,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  Btn: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
