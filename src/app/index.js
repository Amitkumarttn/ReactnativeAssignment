import React from "react";
import { View, StyleSheet } from "react-native";
import ActionButton from "../components/ActionButtton";

const App = () => (
  <View style={styles.container}>
    <ActionButton />
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
