import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Card } from "react-native-elements";
import AdCart from "../components/AdCard";
import AdsTypes from "../utils/adsTypes";
import Keys from "../utils/tapsellKeys";

RewardedScreen = () => {
  const { btnContainer } = styles;

  return (
    <View>
      <AdCart type={AdsTypes.REWARDED} zoneId={Keys.REWARDED_KEY} />
    </View>
  );
};

RewardedScreen.navigationOptions = {
  headerTitle: "Rewarded"
};

const styles = StyleSheet.create({
  btnContainer: {
    marginBottom: 10
  }
});

export default RewardedScreen;
