import { View, Text, Image } from "react-native";
import Avatar from "../../Component/Avatar";
import ChipAvatar from "../../Component/ChipAvatar";
import ItemAvatar from "../../Component/ItemAvatar";
import React from "react";
import styles from "./style";

const AvatarScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.title}>Default</Text>
          <Image
            style={styles.profile}
            source={require("../../../assets/profile.png")}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Chip Avatar</Text>
          <ChipAvatar />
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Item Avatar</Text>
          <ItemAvatar />
          <ItemAvatar />
          <ItemAvatar />
        </View>
        <View style={styles.section}>
          <Avatar />
          <Avatar />
          <Avatar />
        </View>
      </View>
    </>
  );
};

export default AvatarScreen;
