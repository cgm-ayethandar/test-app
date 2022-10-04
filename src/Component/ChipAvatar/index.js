import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./style";

const ChipAvatar = () => {
  return (
    <>
    <View style={styles.container}>
      <Image
        style={styles.profile}
        source={require("../../../assets/profile.png")}
      />
      <Text style={styles.text}>Kit Bishop</Text>
    </View>
    </>
  );
};

export default ChipAvatar;
