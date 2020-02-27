import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import { useSelector } from "react-redux";

const AdsStatus = () => {
  const { boldFont } = styles;
  const { rewarded, Interstitial, native } = useSelector(
    state => state.adsStatus
  );
  console.log(rewarded);
  return (
    <View>
      <Card>
        <Card>
          <View>
            <Text style={boldFont}>Rewarded Ads:</Text>
          </View>
          <View>
            <Text>Shown: {rewarded.shownAds} </Text>
          </View>
          <View>
            <Text>Rewarded: {rewarded.rewardedAds}</Text>
          </View>
        </Card>
        <Card>
          <View>
            <Text style={boldFont}>Interstitial Ads:</Text>
          </View>
          <View>
            <Text>Shown: {Interstitial.shownAds}</Text>
          </View>
        </Card>
        <Card>
          <View>
            <Text style={boldFont}>Native Ads:</Text>
          </View>
          <View>
            <Text>Shown: {native.shownAds}</Text>
          </View>
        </Card>
      </Card>
    </View>
  );
};

AdsStatus.navigationOptions = {
  headerTitle: "Status"
};

const styles = StyleSheet.create({
  boldFont: {
    fontWeight: "700"
  }
});

export default AdsStatus;
