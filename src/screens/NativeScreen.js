import React, { useEffect, useState, version } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  ToastAndroid
} from "react-native";
import { Button, Card, Image } from "react-native-elements";
import RNTapsellPlus from "react-native-tapsell-plus";
import Keys from "../utils/tapsellKeys";
import { useDispatch } from "react-redux";
import { incrementNative } from "../redux/actions/adsStatus";

NativeScreen = () => {
  const dispatch = useDispatch();
  const {
    btnContainer,
    boldFont,
    imageContainer,
    descriptionContainer
  } = styles;
  const [nativeAd, setNativeAd] = useState({
    adId: " ",
    title: " ",
    description: " ",
    callToActionText: " ",
    iconUrl: " ",
    landscapeImageUrl: " "
  });
  useEffect(() => {
    sendRequest();
  }, []);
  function sendRequest() {
    RNTapsellPlus.requestNative(
      Keys.NATIVE_KEY,
      onAdAvailable,
      (zoneId, error) => {
        ToastAndroid.show(error, ToastAndroid.SHORT);
      }
    );
  }
  const onAdAvailable = adData => {
    dispatch(incrementNative());
    ToastAndroid.show("Ready!!", ToastAndroid.SHORT);
    setNativeAd({
      adId: adData.ad_id,
      title: adData.title,
      description: adData.description,
      callToActionText: adData.call_to_action_text,
      iconUrl: adData.icon_url,
      landscapeImageUrl: adData.landscape_static_image_url
    });
  };
  const onAdOpenPress = () => {
    RNTapsellPlus.nativeAdClicked(Keys.NATIVE_KEY, nativeAd.adId);
  };

  return (
    <View>
      {nativeAd.adId != " " && (
        <TouchableNativeFeedback onPress={onAdOpenPress}>
          <Card title={nativeAd.title}>
            <View style={imageContainer}>
              <Image
                resizeMode="cover"
                style={{ width: "100%", height: 200 }}
                source={{ uri: nativeAd.landscapeImageUrl }}
              ></Image>
            </View>
            <View style={descriptionContainer}>
              <Text style={boldFont}>{nativeAd.description}</Text>
            </View>
          </Card>
        </TouchableNativeFeedback>
      )}
    </View>
  );
};

NativeScreen.navigationOptions = {
  headerTitle: "Native"
};

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 10,
    marginBottom: 10
  },
  imageContainer: {
    width: "100%",
    height: 200,
    overflow: "hidden"
  },
  descriptionContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10
  },
  boldFont: {
    fontWeight: "700"
  }
});

export default NativeScreen;
