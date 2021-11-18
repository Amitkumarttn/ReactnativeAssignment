import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

function IntroText() {
  return (
    <View style={styles.content}>
      <Text style={styles.paragraph}>
        “No employees found. Please Add employee”.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  paragraph: {
    marginVertical: 10,
    textAlign: 'center',
    color: '#000',
    fontSize: 17,
    fontWeight: '500',
  },
});

export default IntroText;
