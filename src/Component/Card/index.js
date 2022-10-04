import { View, Text, Image } from "react-native";
import React from "react";
import SmallButton from "../SmallButton";
import styles from "./style";

const Card = () => {
  return (
    <>
    <View style={styles.container}>
      <Image
        style={styles.coverPhoto}
        source={require("../../../assets/photo1.jpg")}
      />
      <View style={styles.textContainer}>
        <Text style={styles.subtitle}>Card Subtitle</Text>
        <Text style={styles.title}>Card Title</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet. Nulla repudiandae id eveniet inventore et
          magnam vitae qui corporis quia.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <SmallButton item={{ text: "Action" }} />
        <View style={styles.emojiContainer}>
          <Text style={styles.emoji}>🖤</Text>
          <Text style={styles.emoji}>⏭</Text>
        </View>
      </View>
    </View>
    </>
  );
};

export default Card;
