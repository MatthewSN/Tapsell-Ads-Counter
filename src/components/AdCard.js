import React, { useState } from "react";
import { View, Text, StyleSheet, ToastAndroid } from "react-native";
import { Button, Card } from "react-native-elements";
import AdsTypes from "../utils/adsTypes";
import RNTapsellPlus from "react-native-tapsell-plus";

export default ({ type = AdsTypes.REWARDED, zoneId }) => {
  const [btnDisabled, setBtnDisabled] = useState(true);
  const { btnContainer } = styles;
  const onAdAvailable = () => {
    ToastAndroid.show("Ready!!", ToastAndroid.SHORT);
    setBtnDisabled(false);
  };
  const onError = err => {};
  const onRequestPress = () => {
    switch (type) {
      case AdsTypes.REWARDED:
        RNTapsellPlus.requestRewarded(zoneId, onAdAvailable, onError);
        return;
      case AdsTypes.INTERSITIAL:
        RNTapsellPlus.requestInterstitial(zoneId, onAdAvailable, onError);
        return;
    }
  };
  const onOpened = () => {};
  const onClosed = () => {};
  const onRewarded = () => {};
  const onShowPress = () => {
    switch (type) {
      case AdsTypes.REWARDED:
        RNTapsellPlus.showAd(zoneId, onOpened, onClosed, onRewarded, onError);
        return;
      case AdsTypes.INTERSITIAL:
        RNTapsellPlus.showAd(zoneId, onOpened, onClosed, onError);
        return;
    }
  };

  return (
    <View>
      <View>
        <Card>
          <View style={btnContainer}>
            <Button onPress={onRequestPress} title="Requst" />
          </View>
          <View style={btnContainer}>
            <Button onPress={onShowPress} disabled={btnDisabled} title="Show" />
          </View>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    marginBottom: 10
  }
});
