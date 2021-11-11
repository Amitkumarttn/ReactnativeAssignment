import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import GetLocation from 'react-native-get-location';
import MapView, {Marker} from 'react-native-maps';
import {GpsIcon} from '../constants';

export default class GeolocationScreen extends Component {
  state = {
    latitude: 0,
    longitude: 0,
    location: null,
    loading: false,
  };
  _requestLocation = () => {
    this.setState({loading: true, location: null});

    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 150000,
    })
      .then(location => {
        this.setState({
          latitude: location.latitude,
          longitude: location.longitude,
          loading: false,
        });
      })
      .catch(ex => {
        const {code, message} = ex;
        console.warn(code, message);
        if (code === 'CANCELLED') {
          Alert.alert('Location cancelled by user or by another request');
        }
        if (code === 'UNAVAILABLE') {
          Alert.alert('Location service is disabled or unavailable');
        }
        if (code === 'TIMEOUT') {
          Alert.alert('Location request timed out');
        }
        if (code === 'UNAUTHORIZED') {
          Alert.alert('Authorization denied');
        }
        this.setState({
          location: null,
          loading: false,
        });
      });
  };
  render() {
    const {loading} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <MapView
          style={styles.map}
          mapType={'standard'}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
            }}
            image={GpsIcon}
          />
        </MapView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity disabled={loading} onPress={this._requestLocation}>
            <Text style={styles.button}>Get my Location</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttonContainer: {bottom: -300, backgroundColor: '#eee', padding: 20},
  button: {
    fontWeight: '600',
  },
});
