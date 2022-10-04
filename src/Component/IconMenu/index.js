import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import styles from "./style";

const IconMenu = ({ item }) => {
  return (
    <>
    <TouchableOpacity style={styles.container}>
      <Ionicons name={item.icon} size={25} color="gray" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
    </>
  );
};

export default IconMenu;
