import { View, Button, Alert } from "react-native";
import React from "react";

const AlertScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <>
      <View>
        <Button onPress={createTwoButtonAlert} title={"2-Button Alert"} />
        <Button onPress={createThreeButtonAlert} title={"3-Button Alert"} />
      </View>
    </>
  );
};

export default AlertScreen;
