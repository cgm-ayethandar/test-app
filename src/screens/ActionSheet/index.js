import * as React from "react";
import { ActionSheetIOS, Button, StyleSheet, Text, View } from "react-native";
import styles from "./style";

const ActionSheet = () => {

  const [result, setResult] = React.useState("🔮");

  const onPress = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["Cancel", "Delete", "Share", "Play (open Modal)", "Favorite"],
        destructiveButtonIndex: 1,
        cancelButtonIndex: 0,
        userInterfaceStyle: 'dark'
      },
      buttonIndex => {
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
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
      <Button onPress={onPress} title="Open Action Sheet" />
    </View>
  );
};

export default ActionSheet;
