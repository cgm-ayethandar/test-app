import { Text, View, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import styles from "./style";

const BasicChip = ({ item }) => {
  return (
    <>
    <View
      style={[
        styles.chip,
        item.bgColor
          ? { backgroundColor: item.bgColor }
          : { backgroundColor: "gray" },
      ]}
    >
      {item.avatar && (
        <Image
          style={styles.profile}
          source={require("../../../assets/profile.png")}
        />
      )}
      {item.icon && <Ionicons name={item.icon} size={25} color="black" />}
      <Text
        style={[
          styles.chipText,
          item.ftColor ? { color: item.fgColor } : { color: "white" },
        ]}
      >
        {item.chipText}
      </Text>
    </View>
    </>
  );
};

export default BasicChip;
