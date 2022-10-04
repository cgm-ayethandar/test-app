import { View, Text } from "react-native";
import React from "react";
import Select from "../../Component/Select";
import styles from "./style";

const SelectScreen = () => {
  const selectList = [
    {
      items: ["Madison", "Chicago", "Austin"],
      title: "Origin",
    },
    {
      items: ["New York", "Honolulu", "Baltimore"],
      title: "Destination",
    },
  ];

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Select Trip</Text>
        {selectList.map((item, key) => (
          <View key={key} style={styles.selectContainer}>
            <Select item={item} />
          </View>
        ))}
      </View>
    </>
  );
};

export default SelectScreen;
