import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";

const BlockWidthButton = ({item, onPress}) => {
  return (
        <TouchableOpacity onPress={onPress} style={[styles.button, item.bgColor ? {backgroundColor: item.bgColor} : {backgroundColor: "#09649a",}]}>
            <Text style={[styles.buttonText, item.ftColor ? {color: item.ftColor} : {color: "white"}]}>{item.text}</Text>
        </TouchableOpacity>
  );
};

export default BlockWidthButton;
