import { View, Text, Pressable, Modal, Alert } from "react-native";
import BlockWidthButton from "../../Component/BlockWidthButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState, useCallback } from "react";
import styles from "./style";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const ToastScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openToast = useCallback(() => {
    setModalVisible(true);
    wait(2000).then(() => setModalVisible(false));
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Modal
          animationType="slide"
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Please wait...</Text>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Ionicons color="black" name="close-circle-outline" size={20} />
              </Pressable>
            </View>
          </View>
        </Modal>

        <BlockWidthButton item={{ text: "Open Toast" }} onPress={openToast} />
      </View>
    </>
  );
};

export default ToastScreen;
