import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MyCartScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MyCartScreen</Text>
    </View>
  );
};

export default MyCartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
