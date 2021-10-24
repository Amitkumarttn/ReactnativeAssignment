import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';

import AsyncStorageData from '@react-native-async-storage/async-storage';

const {height, width} = Dimensions.get('window');

//Importing Icons
import {UserIcon, MailIcon, LockIcon, PhoneIcon} from '../constant/icons';

export default class SignupScreen extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '',
    password: '',
    Repassword: '',
    Credentials: null,
  };

  async componentDidMount() {
    const user = await AsyncStorageData.getItem('UserValue');
    console.log('Name: =>', user);
    console.log('Name', this.state.Credentials);
    this.setState({
      Credentials: user,
    });
  }
  _handlePress = async () => {
    const {name, email, phone, password, Repassword} = this.state;
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (
      name.length === '' ||
      email.length === '' ||
      phone.length === '' ||
      password.length === '' ||
      Repassword.length === ''
    ) {
      Alert.alert('Information!', 'Please fill all fields');
    } else if (reg.test(email) === false) {
      Alert.alert('Information!', 'Email ID is not Valid');
    } else if (phone.length != 10) {
      Alert.alert('Information!', 'Invalid Mobile Number');
    } else if (password.length <= 8) {
      Alert.alert('Information!', 'Password must be 8 Character Long');
    } else if (password !== Repassword) {
      Alert.alert('Information!', 'Password Do not Match');
    } else {
      var USER_DATA = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        password: this.state.password,
      };
      console.log('UserValue =>', JSON.stringify(USER_DATA));
      await AsyncStorageData.setItem('UserValue', JSON.stringify(USER_DATA));

      const user = await AsyncStorageData.getItem('UserValue');
      this.setState({
        Credentials: user,
      });
      this.props.navigation.navigate('Home', {
        user_name: USER_DATA.name,
        email_id: USER_DATA.email,
      });
    }
  };

  onFocus() {
    this.setState({
      borderColor: 'blue',
    });
  }

  onBlur() {
    this.setState({
      borderColor: '#fff',
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.container2}>
          <Text style={styles.heading}>Let's Get Started!</Text>
          <Text style={styles.subheading}>
            Create an account to Q Allure to get all features
          </Text>

          <View>
            <View style={styles.InputContainer}>
              <Image style={styles.icons} source={UserIcon} />
              <TextInput
                onBlur={() => this.onBlur()}
                onFocus={() => this.onFocus()}
                clearButtonMode="always"
                style={[
                  styles.TextInputContainer,
                  {
                    borderColor: this.state.borderColor,
                    color: this.state.color,
                    borderWidth: 3,
                  },
                ]}
                placeholder="Jhone Williams"
                value={this.state.name}
                onChangeText={text => {
                  this.setState({name: text});
                }}
              />
            </View>

            <View style={styles.InputContainer}>
              <Image style={styles.icons} source={MailIcon} />
              <TextInput
                clearButtonMode="always"
                style={styles.TextInputContainer}
                placeholder="Email"
                value={this.state.email}
                onChangeText={text => {
                  this.setState({email: text});
                }}
              />
            </View>

            <View style={styles.InputContainer}>
              <Image style={styles.icons} source={PhoneIcon} />
              <TextInput
                clearButtonMode="always"
                style={styles.TextInputContainer}
                placeholder="Phone"
                keyboardType="number-pad"
                value={this.state.phone}
                onChangeText={text => {
                  this.setState({phone: text});
                }}
              />
            </View>

            <View style={styles.InputContainer}>
              <Image style={styles.icons} source={LockIcon} />
              <TextInput
                clearButtonMode="always"
                secureTextEntry={true}
                style={styles.TextInputContainer}
                placeholder="Password"
                value={this.state.password}
                onChangeText={text => {
                  this.setState({password: text});
                }}
              />
            </View>

            <View style={styles.InputContainer}>
              <Image style={styles.icons} source={LockIcon} />
              <TextInput
                clearButtonMode="always"
                secureTextEntry={true}
                style={styles.TextInputContainer}
                placeholder="Confirm Password"
                value={this.state.Repassword}
                onChangeText={text => {
                  this.setState({Repassword: text});
                }}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.ButtonContainer}
            onPress={this._handlePress}>
            <Text style={styles.Btn}>CREATE</Text>
          </TouchableOpacity>
          <View style={styles.infoContainer}>
            <Text style={styles.info}>Already have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.loginTxt}>Login here</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    marginTop: 80,
    fontSize: 22,
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: 14,
    color: '#888',
    marginVertical: 5,
    marginBottom: 40,
  },
  icons: {
    width: 20,
    height: 20,
    marginHorizontal: 25,
    marginTop: 22,
    position: 'absolute',
    zIndex: 2,
  },
  TextInputContainer: {
    width: width - 50,
    height: 60,
    backgroundColor: '#fff',
    paddingLeft: 60,
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 18,
  },
  Input: {
    paddingRight: 3,
  },
  ButtonContainer: {
    backgroundColor: 'blue',
    width: width - 220,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Btn: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  infoContainer: {
    flexDirection: 'row',
    marginVertical: 75,
  },
  info: {
    fontWeight: '500',
  },
  loginTxt: {
    color: 'blue',
    fontWeight: 'bold',
  },
});
