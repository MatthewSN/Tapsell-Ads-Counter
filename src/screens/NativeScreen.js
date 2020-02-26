import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Card } from "react-native-elements";
import AdCart from "../components/AdCard";

NativeScreen = () => {
  const { btnContainer } = styles;

  return (
    <View>
      <AdCart />
    </View>
  );
};

NativeScreen.navigationOptions = {
  headerTitle: "Native"
};

const styles = StyleSheet.create({
  btnContainer: {
    marginBottom: 10
  }
});

export default NativeScreen;
