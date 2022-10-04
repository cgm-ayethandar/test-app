import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import SkeletonText from "../../Component/SkeletonText";
import styles from "./style";

const SkeletonTextScreen = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <SkeletonText />
          <SkeletonText />
          <SkeletonText />
          <SkeletonText />
        </View>
      </ScrollView>
    </>
  );
};

export default SkeletonTextScreen;
