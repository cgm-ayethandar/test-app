import { Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState } from "react";
import styles from "./style";

function Checkbox({ bgColor }) {
  const [checked, onChange] = useState(false);

  function onCheckmarkPress() {
    onChange(!checked);
  }

  return (
    <>
      <Pressable
        style={[
          styles.checkboxBase,
          checked &&
            (bgColor ? { backgroundColor: bgColor } : styles.checkboxChecked),
        ]}
        onPress={onCheckmarkPress}
      >
        <RenderIf isTrue={checked}>
          <Ionicons name="checkmark-outline" size={20} color="white" />
        </RenderIf>
        {/* {checked && <Ionicons name="checkmark-outline" size={20} color="white" />} */}
      </Pressable>
    </>
  );
}

export default Checkbox;
