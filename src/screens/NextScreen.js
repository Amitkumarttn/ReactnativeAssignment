import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Button,
} from 'react-native';

const {height, width} = Dimensions.get('window');

export default function NextScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Paste the Clipboard Text here : )</Text>
      <TextInput style={styles.TextInput} placeholder="Your Text" />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 50,
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  TextInput: {
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#888',
    width: width - 150,
    height: height / 30,
    marginVertical: 20,
  },
});
