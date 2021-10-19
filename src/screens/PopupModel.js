import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {LoginScreen, JoinScreen} from '../screens';


class PopupModelScreen extends React.Component {
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
      <View style={styles.container}>
        <View style={styles.container2}>
          <TouchableOpacity
            onPress={this._handlePress}
            style={{
              margin: 24,
              color: this.state.showLogin ? 'grey' : 'black',
            }}>
            <Text style={styles.heading}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._handlePress}
            style={{
              margin: 24,
              color: this.state.showLogin ? 'black' : 'grey',
            }}>
            <Text style={styles.heading}>Join</Text>
          </TouchableOpacity>
        </View>
        {this.state.showLogin ? (
          // content of Sign In
          <View>
            <LoginScreen />
          </View>
        ) : (
          // content of Join
          <View>
            <JoinScreen />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 22,
    marginTop: 80,
  },
});

export default PopupModelScreen;
