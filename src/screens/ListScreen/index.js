import { View, Text, ScrollView } from "react-native";
import ProfileCard from "../../Component/ProfileCard";
import React from "react";
import styles from "./style";

const ListScreen = () => {
  const profiles = [
    {
      description: "I'm a big deal",
      name: "Finn",
      text: "Lorem ipsum dolor sit amet. Ut quae",
    },
    {
      description: "Lorem ipsum dolor",
      name: "Han",
      text: "Lorem ipsum dolor sit amet. Ut quae",
    },
    {
      description: "sit amet. Ut quae",
      name: "Luke",
      text: "Lorem ipsum dolor sit amet. Ut quae",
    },
  ];
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Recent Conversations</Text>
          {profiles.map((profile, key) => (
            <ProfileCard key={key} profile={profile} />
          ))}
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Online</Text>
          {profiles.map((profile, key) => (
            <ProfileCard key={key} profile={profile} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default ListScreen;
