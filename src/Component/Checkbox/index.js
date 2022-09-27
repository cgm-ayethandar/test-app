import * as React from "react";
import { Pressable } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./style";

function Checkbox({bgColor}) {
    const [checked, onChange] = React.useState(false);
  
    function onCheckmarkPress() {
      onChange(!checked);
    }
  
    return (
      <Pressable
        style={[styles.checkboxBase, checked && ( bgColor ? {backgroundColor: bgColor} : styles.checkboxChecked) ]}
        onPress={onCheckmarkPress}>
        {checked && <Ionicons name="checkmark-outline" size={20} color="white" />}
      </Pressable>
    );
  };

  export default Checkbox;