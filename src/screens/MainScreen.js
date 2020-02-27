import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Card } from "react-native-elements";

MainScreen = ({ navigation }) => {
  const { btnContainer } = styles;
  const onRewardPress = () => {
    navigation.navigate("Rewareded");
  };
  const onIntersitialPress = () => {
    navigation.navigate("Intersitial");
  };
  const onNativePress = () => {
    navigation.navigate("Native");
  };
  const onAdsStatusPress = () => {
    navigation.navigate("Status");
  };
  return (
    <View>
      <View>
        <Card>
          <View style={btnContainer}>
            <Button onPress={onRewardPress} title="Rewarded" />
          </View>
          <View style={btnContainer}>
            <Button onPress={onIntersitialPress} title="Interstitial" />
          </View>
          <View style={btnContainer}>
            <Button onPress={onNativePress} title="Native" />
          </View>
          <View style={btnContainer}>
            <Button onPress={onAdsStatusPress} title="Ads Status" />
          </View>
        </Card>
      </View>
    </View>
  );
};

MainScreen.navigationOptions = {
  headerTitle: "Ads"
};

const styles = StyleSheet.create({
  btnContainer: {
    marginBottom: 10
  }
});

export default MainScreen;
