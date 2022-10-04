import { View, Text, Pressable, Modal, Alert } from "react-native";
import BlockWidthButton from "../../Component/BlockWidthButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProfileCard from "../../Component/ProfileCard";
import React, { useState } from "react";
import styles from "./style";

const ModalScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

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
                <Text style={[styles.modalTitle, { color: "blue" }]}>
                  Cancel
                </Text>
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
    </>
  );
};

export default ModalScreen;
