import { Text, Switch, View } from "react-native";
import React, {useState} from "react";
import styles from "./style";

const Toggle = ({ item }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <>
    <View style={styles.row}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.badge}>
        <Switch
          // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          trackColor={{ false: "#767577", true: item.bgColor }}
          value={isEnabled}
        />
      </View>
    </View>
    </>
  );
};

export default Toggle;
