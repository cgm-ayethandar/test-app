import { Text, View } from "react-native";
import React from "react";
import styles from "./style";

const ColorChip = ({ item }) => {
  return (
    <>
    <View
      style={[
        styles.chip,
        item.ftColor
          ? { backgroundColor: item.ftColor }
          : { backgroundColor: "blue" },
      ]}
    >
      <Text style={[styles.chipText, { color: "white" }]}>{item.chipText}</Text>
    </View>
    </>
  );
};

export default ColorChip;
