import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
//Importing Icons
import {
  GoogleIcon,
  FacebookIcon,
  AppleIcon,
  FlagIcon,
} from '../constants/Icons';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, padding: 24}}>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.TextInputContainer}
            placeholder="Your Email Address"
          />

          <View style={styles.TextInputContainer}>
            <TextInput secureTextEntry={true} placeholder="Password" />
            <TouchableOpacity style={styles.show}>
              <Text>Show</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.forget}>Forget Password?</Text>
        </View>

        <TouchableOpacity style={styles.signinContainer}>
          <Text style={styles.signIntext}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.OrContainer}>
          <Text style={styles.OrText}>or</Text>
        </View>
        <View style={styles.line} />

        <TouchableOpacity style={styles.GoogleIconContainer}>
          <Image style={styles.GoogleIcon} source={GoogleIcon} />
          <Text>Sign in with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.FacebookIconContainer}>
          <Image style={styles.FacebookIcon} source={FacebookIcon} />
          <Text style={styles.SocialTxt}>Sign in with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.AppleIconContainer}>
          <Image style={styles.AppleIcon} source={AppleIcon} />
          <Text style={styles.SocialTxt}>Sign in with Apple</Text>
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <Text style={styles.infoAccTxt}>Don't have an account ?</Text>
          <Text style={styles.joinTxt}>Join</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TextInputContainer: {
    borderWidth: 2,
    borderColor: '#eee',
    width: width - 50,
    height: '16%',
    marginBottom: 10,
    paddingLeft: 15,
    justifyContent: 'center',
  },
  show: {
    position: 'absolute',
    marginHorizontal: 270,
    marginTop: 10,
    width: width,
  },
  forget: {
    textAlign: 'center',
    color: '#000',
    top: 10,
  },
  signinContainer: {
    backgroundColor: '#000',
    marginTop: -100,
    height: 40,
    justifyContent: 'center',
    marginBottom: 15,
  },
  GoogleIconContainer: {
    marginTop: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    width: 340,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#eee',
    height: 40,
  },
  GoogleIcon: {
    width: 30,
    marginRight: 20,
    height: 30,
  },
  FacebookIconContainer: {
    marginTop: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    width: 340,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#3A5997',
    borderWidth: 2,
    borderColor: '#eee',
    height: 40,
  },
  FacebookIcon: {
    width: 20,
    marginRight: 20,
    height: 20,
  },
  AppleIconContainer: {
    marginTop: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    width: 340,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#000',
    borderWidth: 2,
    borderColor: '#eee',
    height: 40,
  },
  AppleIcon: {
    width: 30,
    marginRight: 20,
    height: 30,
  },
  SocialTxt: {
    color: '#fff',
  },
  signIntext: {
    color: '#fff',
    textAlign: 'center',
  },
  OrContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    width: 44,
    height: 44,
    borderWidth: 2,
    borderRadius: 44 / 2,
    borderColor: '#eee',
    zIndex: 100,
  },
  OrText: {
    color: '#888',
    fontSize: 16,
    zIndex: 100,
  },
  line: {
    height: 2,
    backgroundColor: '#eee',
    marginTop: -20,
  },
  infoContainer: {
    width: '106%',
    height: 50,
    borderWidth: 1,
    borderColor: '#888',
    backgroundColor: '#eee',
    marginLeft: -10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
