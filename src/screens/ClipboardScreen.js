import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

const ClipboardScreen = ({navigation}) => {
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = () => {
    Clipboard.setString(copiedText);
    alert('Text Copied!');
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    alert(text);
  };
  return (
    <View style={styles.container}>
    <Text>Welcome to React Native App</Text>
      <Button title="Show Text" onPress={fetchCopiedText} />
      <TextInput
        style={styles.TextInput}
        placeholder="Enter here"
        value={copiedText}
        onChangeText={setCopiedText}
        onPress={copyToClipboard}
      />
      <Button title="Copy to clipboard" onPress={copyToClipboard} />
      <Button
        title="Move to next Screen"
        onPress={() => navigation.navigate('Next')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  TextInput: {
    width: 300,
    height: 30,
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#888',
  },
});

export default ClipboardScreen;
