import { View, Text, TextInput } from "react-native";
import React, {useState} from "react";
import styles from "./style";

const InputField = ({ label }) => {
  const [text, setText] = useState("");

  return (
    <>
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.labelTitle}>{label}</Text>
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

export default InputField;
