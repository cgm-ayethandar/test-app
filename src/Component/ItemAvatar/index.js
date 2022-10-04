import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./style";

const ItemAvatar = () => {
  return (
    <>
    <View style={styles.container}>
      <Image
        style={styles.profile}
        source={require("../../../assets/profile.png")}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Kit Bishop</Text>
        <Text style={styles.text}>Lorem ipsum dolor sit amet. Ut quae </Text>
      </View>
    </View>
    </>
  );
};

export default ItemAvatar;
