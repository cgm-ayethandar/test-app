import * as React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";

const Avatar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
      <Text style={styles.title}>Kit Bishop</Text>
      <Text style={styles.text}>Lorem ipsum dolor sit amet. Ut quae </Text>
      </View>
      <Image
        style={styles.profile}
        source={require("../../../assets/profile.png")}
      />
    </View>
  );
};

export default Avatar;
