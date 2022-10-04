import { View, Text, TextInput } from "react-native";
import React, {useState} from "react";
import styles from "./style";

const RequiredInput = ({ item }) => {
  const [text, setText] = useState("");

  return (
    <>
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.labelTitle}>{item}</Text>
        <Text style={styles.star}>*</Text>
      </View>
      <TextInput
        style={styles.inputField}
        onChangeText={setText}
        value={text}
      />
    </View>
    </>
  );
};

export default RequiredInput;
