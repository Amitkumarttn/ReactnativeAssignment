import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CategoriesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CategoriesScreen</Text>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
