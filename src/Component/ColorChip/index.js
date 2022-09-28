import * as React from "react";
import { Text, View, Image } from "react-native";
import styles from "./style";

const ColorChip = ({item}) => {
    return (
      <View
        style={[
          styles.chip,
          item.ftColor
            ? { backgroundColor: item.ftColor }
            : { backgroundColor: "blue" },
        ]}
      >
        <Text style={[styles.chipText, {color: "white"},]}>{item.chipText}</Text>
      </View>
    );
};

export default ColorChip;