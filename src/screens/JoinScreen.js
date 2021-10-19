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
//Importing Icons
import {
  GoogleIcon,
  FacebookIcon,
  AppleIcon,
  FlagIcon,
} from '../constants/Icons';
const {width, height} = Dimensions.get('window');
import RadioForm from 'react-native-simple-radio-button';
import CheckBox from 'react-native-check-box';
var radio_props = [
  {label: 'Male', value: 0},
  {label: 'Female', value: 1},
];
export default class JoinScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true,
    };
  }

  _handlePress = () => {
    this.setState({showLogin: !this.state.showLogin});
  };
  render() {
    return (
      <View>
        <View>
          <TextInput
            style={styles.TextInputContainer2}
            placeholder="First Name"
          />
          <TextInput
            style={styles.TextInputContainer2}
            placeholder="Last Name"
          />
          <TextInput
            style={styles.TextInputContainer2}
            placeholder="Your Email"
          />
          <View style={styles.TextInputContainer2}>
            <TextInput secureTextEntry={true} placeholder="Password" />
            <TouchableOpacity style={styles.showN}>
              <Text style={styles.showtxt}>Show</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.TextInputContainer3}>
            <View style={styles.flagContainer}>
              <Image style={styles.flag} source={FlagIcon} />
              <Text style={styles.one}>+1</Text>
              <View style={styles.newline} />
            </View>
            <TextInput placeholder="123 456 7890" />
          </View>

          <View style={styles.radiocontainer}>
            <RadioForm
              radio_props={radio_props}
              initial={null}
              buttonColor={'#F9D101'}
              buttonSize={10}
              buttonOuterSize={20}
              borderWidth={0.5}
              formHorizontal={true}
              labelStyle={{marginRight: 60, fontSize: 14}}
              onPress={value => {
                this.setState({value: value});
              }}
            />
          </View>
          <View style={styles.CheckboxContainer}>
            <CheckBox
              onClick={() => {
                this.setState({
                  isChecked: !this.state.isChecked,
                });
              }}
              isChecked={this.state.isChecked}
              checkBoxColor={'#F9D101'}
              // rightText={'CheckBox'}
            />
            <Text style={styles.acceptText}>
              Be the first to know about new arrivals, sales & promos by
              submitting your email! You can opt out at any time. Privacy Policy
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.signinContainer2}>
          <Text style={styles.signIntext}>Join Now</Text>
        </TouchableOpacity>
        <View style={styles.OrContainer}>
          <Text style={styles.OrText}>or</Text>
        </View>
        <View style={styles.line} />
        <TouchableOpacity style={styles.GoogleIconContainer}>
          <Image style={styles.GoogleIcon} source={GoogleIcon} />
          <Text>Join with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.FacebookIconContainer}>
          <Image style={styles.FacebookIcon} source={FacebookIcon} />
          <Text style={styles.SocialTxt}>Join with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.AppleIconContainer}>
          <Image style={styles.AppleIcon} source={AppleIcon} />
          <Text style={styles.SocialTxt}>Join with Apple</Text>
        </TouchableOpacity>
        <View style={styles.infoContainer2}>
          <Text style={styles.infoAccTxt}>Already have an account ?</Text>
          <Text style={styles.joinTxt}>Sign In</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  signinContainer2: {
    backgroundColor: '#000',
    marginTop: -75,
    height: 40,
    justifyContent: 'center',
    marginBottom: 15,
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
  infoContainer: {
    width: 370,
    position: 'absolute',
    height: 60,
    borderWidth: 1,
    borderColor: '#888',
    backgroundColor: '#eee',
    marginTop: 450,
    marginLeft: -14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer2: {
    width: 370,
    position: 'absolute',
    height: 40,
    borderWidth: 1,
    borderColor: '#888',
    backgroundColor: '#eee',
    marginTop: 700,
    marginLeft: -14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  joinTxt: {
    color: '#000',
    fontWeight: '600',
    marginLeft: 20,
  },
  infoAccTxt: {
    color: '#888',
  },
  TextInputContainer2: {
    borderWidth: 2,
    borderColor: '#eee',
    width: width - 50,
    height: '10%',
    marginBottom: 10,
    paddingLeft: 15,
    justifyContent: 'center',
  },
  TextInputContainer3: {
    borderWidth: 2,
    borderColor: '#eee',
    width: width - 50,
    height: '10%',
    marginBottom: 10,
    justifyContent: 'center',
    paddingLeft: 120,
  },
  RadioButton: {
    flexDirection: 'row',
    flex: 1,
  },
  flag: {
    width: 25,
    height: 25,
    marginLeft: 12,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#F9D101',
  },
  flagContainer: {
    top: 8,
    position: 'absolute',
    flexDirection: 'row',
  },
  one: {
    marginLeft: 20,
    alignSelf: 'center',
  },
  newline: {
    width: 2,
    height: 20,
    backgroundColor: '#eee',
    alignSelf: 'center',
    marginLeft: 20,
  },
  CheckboxContainer: {
    flexDirection: 'row',
  },
  acceptText: {
    fontSize: 12,
    marginTop: 5,
  },
  showN: {
    position: 'absolute',
    marginHorizontal: 270,
    marginTop: 9,
    width: width,
  },
  radiocontainer: {
    marginVertical: 10,
  },
});
