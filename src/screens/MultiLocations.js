import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

import MapView, {Marker} from 'react-native-maps';
// Latitude 28.624840128570668 and Longitude 7.06531357874955
// const DATA = [
//     {
//       latitude: 28.66123,
//       longitude: 77.02985,
//     },
//     {
//       latitude: 28.58999,
//       longitude: 77.02163,
//     },
//     {
//       latitude: 28.71559,
//       longitude: 77.06221,
//     },
//   ];

// const ASPECT_RATIO = width / height;
// const LATITUDE = JSON.stringify(
//   DATA.map(arr => {
//     arr.latitudeValue.toString();
//   }),
// );
// const LONGITUDE = JSON.stringify(
//   DATA.map(arr => {
//     arr.longitudeValue.toString();
//   }),
// );
// const LATITUDE_DELTA = 0.234243;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const {width, height} = Dimensions.get('window');

const DATA = [
  {
    latitudeValue: 28.66123,
    longitudeValue: 77.02985,
  },
  {
    latitudeValue: 28.58999,
    longitudeValue: 77.02163,
  },
  {
    latitudeValue: 28.71559,
    longitudeValue: 77.06221,
  },
];

const ASPECT_RATIO = width / height;
const LATITUDE = 28.62442;
const LONGITUDE = 77.06506;
const LATITUDE_DELTA = 0.234243;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class MapScreen extends React.Component {
  state = {
    region: {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
  };

  render() {
    const {region} = this.state;
    console.log(
      '<><><><>',
      DATA.map(arr => {
        console.log(arr.latitudeValue, arr.longitudeValue);
      }),
    );
    return (
      <View style={styles.container}>
        <MapView
          provider={null}
          mapType={'standard'}
          loadingEnabled={true}
          showsTraffic={true}
          showsBuildings={true}
          style={styles.map}
          initialRegion={region}>
          <Marker
            coordinate={{
              latitude: LATITUDE,
              longitude: LONGITUDE,
            }}
            image={require('../assets/Icons/track.png')}
          />
          <Marker
            coordinate={{
              latitude: 28.58999,
              longitude: 77.02163,
            }}
            image={require('../assets/Icons/track.png')}
          />
          <Marker
            coordinate={{
              latitude: 28.71559,
              longitude: 77.06221,
            }}
            image={require('../assets/Icons/track.png')}
          />
        </MapView>
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
});

export default MapScreen;
