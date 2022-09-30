import * as React from "react";
import { View, Text, Pressable, Modal, Alert } from "react-native";
import styles from "./style";
import Ionicons from "react-native-vector-icons/Ionicons";
import BlockWidthButton from "../../Component/BlockWidthButton";
import ProfileCard from "../../Component/ProfileCard";

const ModalScreen = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

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
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.titleContainer}>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Text style={[styles.modalTitle, { color: "blue" }]}>Cancel</Text>
            </Pressable>
            <Text style={styles.modalTitle}>Contacts</Text>
            <Ionicons name="add-outline" size={28} color="blue"></Ionicons>
          </View>
          {profiles.map((profile, key) => (
          <ProfileCard key={key} profile={profile} />
        ))}
        </View>
      </Modal>

      <BlockWidthButton
        item={{ text: "Open Modal" }}
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
};

export default ModalScreen;
