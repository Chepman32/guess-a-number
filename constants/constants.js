import { Dimensions } from "react-native";

export const Constants = {
  MAX_WIDTH: Dimensions.get("screen").width,
  MAX_HEIGHT: Dimensions.get("screen").height,
  hapticOptions: {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false
  },
}