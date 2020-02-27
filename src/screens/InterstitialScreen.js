import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Card } from "react-native-elements";
import AdCart from "../components/AdCard";
import AdsTyps from "../utils/adsTypes";
import Keys from "../utils/tapsellKeys";

InterstitialScreen = () => {
  const { btnContainer } = styles;
  return (
    <View>
      <AdCart type={AdsTyps.INTERSTITIAL} zoneId={Keys.INTERSITIAL_KEY} />
    </View>
  );
};

InterstitialScreen.navigationOptions = {
  headerTitle: "Interstitial"
};

const styles = StyleSheet.create({
  btnContainer: {
    marginBottom: 10
  }
});

export default InterstitialScreen;
