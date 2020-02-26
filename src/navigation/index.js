import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Screens from "../screens";

const StackNavigator = createStackNavigator({
  Main: Screens.MainScreen,
  Rewareded: Screens.RewardedScreen,
  Intersitial: Screens.InterstitialScreen,
  Native: Screens.NativeScreen
});

export default createAppContainer(StackNavigator);
