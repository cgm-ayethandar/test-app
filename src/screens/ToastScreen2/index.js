import { View } from "react-native";
import BlockWidthButton from "../../Component/BlockWidthButton";
import React from "react";
import styles from "./style";
import Toast from "react-native-root-toast";

const ToggleScreen2 = () => {
  const showTopToast = () => {
    let toast = Toast.show("Request sent successfully", {
      duration: Toast.durations.LONG,
      position: 55,
    });

    setTimeout(function hideToast() {
      Toast.hide(toast);
    }, 3000);
  };

  const showBottomToast = () => {
    let toast = Toast.show("Request sent successfully", {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
    });

    setTimeout(function hideToast() {
      Toast.hide(toast);
    }, 3000);
  };
  return (
    <>
      <View style={styles.container}>
        <BlockWidthButton item={{ text: "Top Toast" }} onPress={showTopToast} />
        <BlockWidthButton
          item={{ text: "Bottom Toast" }}
          onPress={showBottomToast}
        />
      </View>
    </>
  );
};

export default ToggleScreen2;
