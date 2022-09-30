import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./style";
import ProfileCard from "../../Component/ProfileCard";

const ListScreen = () => {
  const profiles = [
    {
      name: "Finn",
      description: "I'm a big deal",
      text: "Lorem ipsum dolor sit amet. Ut quae",
    },
    {
      name: "Han",
      description: "Lorem ipsum dolor",
      text: "Lorem ipsum dolor sit amet. Ut quae",
    },
    {
      name: "Luke",
      description: "sit amet. Ut quae",
      text: "Lorem ipsum dolor sit amet. Ut quae",
    },
  ];
  return (
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
  );
};

export default ListScreen;
