import { ActionSheetIOS, Button, Text, View } from "react-native";
import React, { useState } from "react";
import styles from "./style";

const ActionSheet = () => {
  const [result, setResult] = useState("🔮");

  const onPress = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        cancelButtonIndex: 0,
        destructiveButtonIndex: 1,
        options: ["Cancel", "Delete", "Share", "Play (open Modal)", "Favorite"],
        userInterfaceStyle: "dark",
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          setResult(Math.floor(Math.random() * 100) + 1);
        } else if (buttonIndex === 2) {
          setResult("🔮");
        }
      }
    );

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.result}>{result}</Text>
        <Button onPress={onPress} title="Open Action Sheet" />
      </View>
    </>
  );
};

export default ActionSheet;
