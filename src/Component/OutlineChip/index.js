import * as React from "react";
import { Text, View } from "react-native";
import styles from "./style";

const OutlineChip = ({item}) => {
    return (
      <View
        style={[
          styles.chip,
          item.ftColor
            ? { borderColor: item.ftColor }
            : { borderColor: "gray" },
        ]}
      >
        <Text style={[styles.chipText, item.ftColor ? { color: item.fgColor } : {color: "black"},]}>{item.chipText}</Text>
      </View>
    );
};

export default OutlineChip;