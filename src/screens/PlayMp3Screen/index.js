import { Audio } from "expo-av";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React, { useEffect, useState } from "react";

const PlayMp3Screen = () => {
  const [sound, setSound] = useState();

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/mp3/error.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  };

  useEffect(() => (sound ? () => sound.unloadAsync() : undefined), [sound]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={playSound}>
        <Text>Play sound</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default PlayMp3Screen;
