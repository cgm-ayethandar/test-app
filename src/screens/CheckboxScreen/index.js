import * as React from "react";
import { View } from "react-native";
import styles from "./style";
import CheckboxItem from "../../Component/CheckboxItem";

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
          <CheckboxItem key={key} item={item} />
      ))}
    </View>
  );
};

export default CheckboxScreen;
