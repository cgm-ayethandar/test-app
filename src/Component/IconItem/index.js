import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import styles from "./style";

const IconItem = ({ item }) => {
  return (
    <>
    <View style={styles.container}>
      <Ionicons name={item.icon} size={25} color="gray" />
      <View style={styles.textContainer}>
        <Text style={styles.label}>{item.label}</Text>
      </View>
    </View>
    </>
  );
};

export default IconItem;
