import React, { useState } from "react";
import { View, Picker } from "react-native";
import styles from "./style";

const PickerScreen = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <>
      <View style={styles.container}>
        {/* <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker> */}
      </View>
    </>
  );
};

export default PickerScreen;
