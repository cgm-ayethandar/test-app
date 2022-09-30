import React, { useState } from "react";
import { View } from "react-native";
import styles from "./style";

const SkeletonText = () => {

  return (
    <View style={styles.container}>
     <View style={styles.profile} ></View>
     <View style={styles.textView}>
      <View style={styles.text1}></View>
      <View style={styles.text2}></View>
      <View style={styles.text3}></View>
     </View>
    </View>
  );
}

export default SkeletonText;