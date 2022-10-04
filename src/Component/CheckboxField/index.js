import { Text, View } from "react-native";
import Checkbox from "../Checkbox";
import React from "react";
import styles from "./style";

const CheckboxField = ({ item }) => {
  return (
    <>
    <View style={styles.row}>
      <Text style={styles.title}>{item.label}</Text>
      <Checkbox bgColor={"gray"} />
    </View>
    </>
  );
};

export default CheckboxField;
