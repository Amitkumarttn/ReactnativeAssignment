import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

import TabNavbar from "./src/Components/TabNavbar";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TabNavbar />
    </SafeAreaView>
  );
}
