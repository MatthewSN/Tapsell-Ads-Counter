import React, { useState } from "react";
import { View, Text, StyleSheet, ToastAndroid } from "react-native";
import { Button, Card } from "react-native-elements";
import AdsTypes from "../utils/adsTypes";
import RNTapsellPlus from "react-native-tapsell-plus";
import { useDispatch } from "react-redux";
import * as Actions from "../redux/actions/adsStatus";

export default ({ type = AdsTypes.REWARDED, zoneId }) => {
  const [btnDisabled, setBtnDisabled] = useState(true);
  const { btnContainer } = styles;
  const dispatch = useDispatch();
  const onAdAvailable = () => {
    ToastAndroid.show("Ready!!", ToastAndroid.SHORT);
    setBtnDisabled(false);
  };
  const onError = err => {
    ToastAndroid.show(err, ToastAndroid.SHORT);
    setBtnDisabled(true);
  };
  const onRequestPress = () => {
    switch (type) {
      case AdsTypes.REWARDED:
        RNTapsellPlus.requestRewarded(zoneId, onAdAvailable, onError);
        return;
      case AdsTypes.INTERSTITIAL:
        RNTapsellPlus.requestInterstitial(zoneId, onAdAvailable, onError);
        return;
    }
  };
  const onOpened = () => {
    ToastAndroid.show("Opened", ToastAndroid.SHORT);
    setBtnDisabled(true);
    switch (type) {
      case AdsTypes.REWARDED:
        dispatch(Actions.incrementShownRewardedAds());
        return;
      case AdsTypes.INTERSTITIAL:
        dispatch(Actions.incrementIntersitial());
        return;
    }
  };
  const onClosed = () => {
    ToastAndroid.show("Closed", ToastAndroid.SHORT);
  };
  const onRewarded = () => {
    ToastAndroid.show("Rewarded!!", ToastAndroid.SHORT);
    dispatch(Actions.incrementRewardedAds());
  };
  const onShowPress = () => {
    switch (type) {
      case AdsTypes.REWARDED:
        RNTapsellPlus.showAd(zoneId, onOpened, onClosed, onRewarded, onError);
        return;
      case AdsTypes.INTERSTITIAL:
        RNTapsellPlus.showAd(zoneId, onOpened, onClosed, onError);
        return;
    }
  };

  return (
    <View>
      <View>
        <Card>
          <View style={btnContainer}>
            <Button onPress={onRequestPress} title="Request" />
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
