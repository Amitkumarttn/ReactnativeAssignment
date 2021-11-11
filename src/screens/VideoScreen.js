import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import Video from 'react-native-video';

const {width} = Dimensions.get('window');

export default class VideoScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Video
          controls={true}
          source={require('../../src/video/sample.mp4')}
          style={styles.backgroundVideo}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  backgroundVideo: {
    width: width,
    height: 500,
    flex: 1,
    backgroundColor: '#000',
  },
});
