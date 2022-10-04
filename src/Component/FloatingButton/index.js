import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import styles from "./style";

const FloatingButton = ({ item }) => {
  return (
    <>
    <TouchableOpacity
      style={[
        styles.button,
        item.bgColor
          ? { backgroundColor: item.bgColor }
          : { backgroundColor: "blue" },
        item.leftIndex ? { left: item.leftIndex } : {},
        item.bottomIndex ? { bottom: item.bottomIndex } : {},
        item.rightIndex ? { right: item.rightIndex } : {},
      ]}
    >
      <Ionicons
        color={item.iconColor ? item.iconColor : "white"}
        name={item.icon}
        size={20}
      />
    </TouchableOpacity>
    </>
  );
};

export default FloatingButton;
