import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {} from "react-native-elements";
import RNTapsellPlus from "react-native-tapsell-plus";
import Screens from "./src/screens";
import Navigator from "./src/navigation";
import Keys from "./src/utils/tapsellKeys";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  RNTapsellPlus.initialize(Keys.APP_KEY);
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
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
