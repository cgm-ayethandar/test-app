import { View, ScrollView } from "react-native";
import React from "react";
import styles from "./style";
import Toggle from "../../Component/Toggle";

const ToggleScreen = () => {
  const list = [
    { title: "Blueberry", bgColor: "blue" },
    { title: "Apple", bgColor: "red" },
    { title: "Pineapple", bgColor: "yellow" },
    { title: "Grape", bgColor: "purple" },
    { title: "Kiwi", bgColor: "green" },
    { title: "Orange", bgColor: "orange" },
  ];

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {list.map((item, key) => (
            <Toggle key={key} item={item} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default ToggleScreen;
