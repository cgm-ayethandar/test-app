import { View, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import styles from "./style";

const FloatingButtonScreen = () => {
  const list = [
    {
      bgColor: "blue",
      icon: "play-outline",
      leftIndex: 0,
      topIndex: 0,
    },
    {
      bgColor: "green",
      icon: "list-outline",
      rightIndex: 0,
      topIndex: 0,
    },
    {
      bgColor: "gray",
      bottomIndex: 0,
      icon: "triangle-outline",
      iconColor: "black",
      leftIndex: 0,
    },
  ];

  return (
    <>
      <View style={styles.container}>
        {/* { list.map((item, key) => <FloatingButton key={key} item={item} /> ) } */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "blue", top: 0, left: 0 }]}
        >
          <Ionicons color="white" name="play-outline" size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: "purple", top: 0, right: 0 },
          ]}
        >
          <Ionicons color="white" name="list-outline" size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: "green", bottom: 30, right: 30 },
          ]}
        >
          <Ionicons color="white" name="triangle-outline" size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: "yellow", bottom: 300, left: 150 },
          ]}
        >
          <Ionicons color="gray" name="triangle-outline" size={20} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default FloatingButtonScreen;
