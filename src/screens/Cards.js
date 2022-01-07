import React from 'react';
import {Image, Text, View, StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class Cards extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={this.props.img} />
        <Text>{this.props.title}</Text>
        <Text>{this.props.desc}</Text>
        <Text>{this.props.price}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: width / 2 - 20,
    height: height / 2.8,
  },
});
