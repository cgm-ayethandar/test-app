import { Text, View } from "react-native";
import React from "react";
import styles from "./style";

const Badge = ({ item }) => {
  return (
    <>
    <View style={styles.row}>
      <Text style={styles.title}>{item.title}</Text>
      <View
        style={[
          styles.badge,
          item.bgColor
            ? { backgroundColor: item.bgColor }
            : { backgroundColor: "blue" },
        ]}
      >
        <Text
          style={[
            styles.badgeText,
            item.ftColor ? { color: item.fgColor } : { color: "white" },
          ]}
        >
          {item.badgeText}
        </Text>
      </View>
    </View>
    </>
  );
};

export default Badge;
