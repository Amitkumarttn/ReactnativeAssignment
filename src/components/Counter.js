import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';

//Importing Icons
import {PlusIcon, MinusIcon} from '../constants/index';
import {
  decrementCounterAction,
  incrementCounterAction,
} from '../Redux/Actions/CounterAction';

const {height, width} = Dimensions.get('window');

class CounterScreen extends Component {
  incrementCounter = () => {
    this.setState({counter: this.state.counter + 1});
  };
  decrementCounter = () => {
    this.setState({counter: this.state.counter - 1});
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.HeadingContainer}>
          <Text style={styles.Heading}>Increment and Decrement App</Text>
        </View>
        <View style={styles.mainContainer}>
          <Text style={styles.Counter}>{this.props.value}</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={this.props.incrementCounter}>
              <Image style={styles.icon} source={PlusIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.decrementCounter}>
              <Image style={styles.icon} source={MinusIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {value: state.counter};
};

const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: () => incrementCounterAction(dispatch),
    decrementCounter: () => decrementCounterAction(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterScreen);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  HeadingContainer: {
    height: height / 4,
    marginTop: -60,
    flexDirection: 'column-reverse',
    backgroundColor: '#1B424E',
    width: width,
    alignItems: 'center',
    borderBottomLeftRadius: 35,
  },
  Heading: {
    fontSize: 22,
    fontWeight: '600',
    color: '#eee',
    marginVertical: 60,
  },
  display: {
    width: width - 100,
    height: height / 2,
    backgroundColor: 'red',
  },
  mainContainer: {
    height: height / 1.24,
    backgroundColor: '#888',
    width: width,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    alignItems: 'center',
  },
  Counter: {
    fontSize: 100,
    fontWeight: '400',
    marginVertical: 80,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  icon: {
    width: 100,
    height: 100,
  },
});
