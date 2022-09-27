import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";

const LargeButton = ({item}) => {
  return (
        <TouchableOpacity style={[styles.button, item.bgColor ? {backgroundColor: item.bgColor} : {backgroundColor: "blue",}]}>
            <Text style={[styles.buttonText, item.ftColor ? {color: item.ftColor} : {color: "white"}]}>{item.text}</Text>
        </TouchableOpacity>
  );
};

export default LargeButton;
