import { Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";

const FullWidthButton = ({ item }) => {
  return (
    <>
    <TouchableOpacity
      style={[
        styles.button,
        item.bgColor
          ? { backgroundColor: item.bgColor }
          : { backgroundColor: "#09649a" },
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          item.ftColor ? { color: item.ftColor } : { color: "white" },
        ]}
      >
        {item.text}
      </Text>
    </TouchableOpacity>
    </>
  );
};

export default FullWidthButton;
