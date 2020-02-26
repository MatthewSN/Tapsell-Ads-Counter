import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {} from "react-native-elements";
import RNTapsellPlus from "react-native-tapsell-plus";
import Screens from "./src/screens";
import Navigator from "./src/navigation";
import Keys from "./src/utils/tapsellKeys";

export default function App() {
  RNTapsellPlus.initialize(Keys.APP_KEY);
  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
