import * as React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./style";

const InputField = ({ label }) => {
  const [text, setText] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
      <Text style={styles.labelTitle}>{label}</Text>
      </View>
      <TextInput style={styles.inputField} onChangeText={setText} value={text} />
    </View>
  );
};

export default InputField;
