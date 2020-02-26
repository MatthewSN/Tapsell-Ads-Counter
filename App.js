import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {} from "react-native-elements";
import RNTapsellPlus from "react-native-tapsell-plus";
export default function App() {
  RNTapsellPlus.initialize(
    "dlikobafathsajgrgbbarpeltcjijaidjgpfmhboectmhbpldrflkrdqkglljhbjkainrj"
  );
  return (
    <View style={styles.container}>
      <Text> up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
