import * as React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./style";

const RequiredInput = ({ item }) => {
  const [text, setText] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
      <Text style={styles.labelTitle}>{item}</Text>
      <Text style={styles.star}>*</Text>
      </View>
      <TextInput style={styles.inputField} onChangeText={setText} value={text} />
    </View>
  );
};

export default RequiredInput;
