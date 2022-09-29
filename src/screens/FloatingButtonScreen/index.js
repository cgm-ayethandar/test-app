import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./style";
import FloatingButton from "../../Component/FloatingButton";

const FloatingButtonScreen = () => {
  const list = [
    { icon: "play-outline", bgColor: "blue", topIndex: 0, leftIndex: 0 },
    { icon: "list-outline", bgColor: "green", topIndex: 0, rightIndex: 0 },
    {
      icon: "triangle-outline",
      bgColor: "gray",
      iconColor: "black",
      bottomIndex: 0,
      leftIndex: 0,
    },
  ];

  return (
    <View style={styles.container}>
      {/* { list.map((item, key) => <FloatingButton key={key} item={item} /> ) } */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "blue", top: 0, left: 0 }]}
      >
        <Ionicons name="play-outline" size={20} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "purple", top: 0, right: 0 }]}
      >
        <Ionicons name="list-outline" size={20} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "green", bottom: 30, right: 30 }]}
      >
        <Ionicons name="triangle-outline" size={20} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "yellow", bottom: 300, left: 150 }]}
      >
        <Ionicons name="triangle-outline" size={20} color="gray" />
      </TouchableOpacity>

    </View>
  );
};

export default FloatingButtonScreen;
