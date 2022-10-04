import { View } from "react-native";
import CheckboxItem from "../../Component/CheckboxItem";
import React from "react";
import styles from "./style";

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
    <>
      <View style={styles.container}>
        {list.map((item, key) => (
          <CheckboxItem key={key} item={item} />
        ))}
      </View>
    </>
  );
};

export default CheckboxScreen;
