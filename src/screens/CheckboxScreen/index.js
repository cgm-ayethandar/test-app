import * as React from "react";
import { Text, View } from "react-native";
import styles from "./style";
import Checkbox from "../../Component/Checkbox";

const CheckboxScreen = () => {
  const list = [
    { title: "Sunghoon", bgColor: "blue" },
    { title: "Jake", bgColor: "green" },
    { title: "Jay", bgColor: "yellow" },
    { title: "Ethan", bgColor: "purple" },
    { title: "Niki", bgColor: "gray" },
    { title: "Sunoo", bgColor: "red" },
    { title: "Enhypen", bgColor: "orange" },
  ];

  return (
    <View style={styles.container}>
      {list.map((item, key) => (
        <View style={styles.rowContainer}>
          <Checkbox key={key} bgColor={item.bgColor} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default CheckboxScreen;
