import React from 'react';
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native';

export default class ImageView extends React.Component {
  state = {
    loading: true
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
        style={styles.Image}
          onLoadEnd={this._onLoadEnd}
          source={{ uri: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }}
        />
        <ActivityIndicator
          size='large' color="#0000ff"
          style={styles.activityIndicator}
          animating={this.state.loading}
        />
      </View>
    )
  }

  _onLoadEnd = () => {
    this.setState({
      loading: false
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  Image: {
    width: '100%',
    height: 200,
  }
})