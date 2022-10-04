import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./style";

const ProfileCard = ({ profile }) => {
  return (
    <>
    <View style={styles.container}>
      <Image
        style={styles.profile}
        source={require("../../../assets/profile.png")}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.description}>{profile.description}</Text>
        <Text style={styles.text}>{profile.text}</Text>
      </View>
    </View>
    </>
  );
};

export default ProfileCard;
