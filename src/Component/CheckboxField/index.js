import * as React from "react";
import { Text, View } from "react-native";
import styles from "./style";
import Checkbox from "../Checkbox";

const CheckboxField = ({ item }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{item.label}</Text>
      <Checkbox bgColor={"gray"} />
    </View>
  );
};

export default CheckboxField;
