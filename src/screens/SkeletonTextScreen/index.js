import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import styles from "./style";
import SkeletonText from "../../Component/SkeletonText";

const SkeletonTextScreen = () => {

  return (
    <ScrollView>
    <View style={styles.container}>
     <SkeletonText />
     <SkeletonText />
     <SkeletonText />
     <SkeletonText />
    </View></ScrollView>
  );
}

export default SkeletonTextScreen;