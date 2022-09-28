import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./style";

const FloatingButton = ({ item }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        item.bgColor
          ? { backgroundColor: item.bgColor }
          : { backgroundColor: "blue" },
        item.leftIndex 
          ? { left: item.leftIndex }
          : {},
        item.bottomIndex 
          ? { bottom: item.bottomIndex }
          : {},
        item.rightIndex 
          ? { right: item.rightIndex }
          : {},
      ]}
    >
      <Ionicons
        name={item.icon}
        size={20}
        color={item.iconColor ? item.iconColor : "white"}
      />
    </TouchableOpacity>
  );
};

export default FloatingButton;
