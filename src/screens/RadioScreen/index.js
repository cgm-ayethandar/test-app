import { View, Text } from "react-native";
import Radio from "../../Component/Radio";
import React from "react";
import styles from "./style";

const RadioScreen = () => {
  const list = ["Apple", "Orange", "Lime"];

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Fruits</Text>
        <Radio list={list} />
      </View>
    </>
  );
};

export default RadioScreen;
