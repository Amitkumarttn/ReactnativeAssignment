import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

import MapView, {Marker} from 'react-native-maps';
// Latitude 28.624840128570668 and Longitude 7.06531357874955

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 28.62442;
const LONGITUDE = 77.06506;
const LATITUDE_DELTA = 0.234243;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class TouchInfoScreen extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: 0,
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    };
  }

  showInput = e => {
    console.log(e.nativeEvent);
    this.setState({
      value: JSON.stringify(e.nativeEvent),
    });
  };
  render() {
    const {region} = this.state;
    return (
      <View style={styles.container}>
        <MapView
          onPress={this.showInput}
          provider={null}
          mapType={'standard'}
          loadingEnabled={true}
          showsTraffic={true}
          showsBuildings={true}
          style={styles.map}
          initialRegion={region}>
          <Marker
            coordinate={{latitude: LATITUDE, longitude: LONGITUDE}}
            image={require('../assets/Icons/track.png')}
          />
        </MapView>
        <Text style={styles.heading}>{this.state.value}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: height,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  heading: {
    fontSize: 15,
    height: height / 5,
    fontWeight: 'bold',
    width: width - 100,
  },
});

export default TouchInfoScreen;
