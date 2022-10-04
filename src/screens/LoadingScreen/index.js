import {
  View,
  Text,
  ActivityIndicator,
  Pressable,
  Modal,
  Alert,
} from "react-native";
import BlockWidthButton from "../../Component/BlockWidthButton";
import React, { useState } from "react";
import styles from "./style";

const LoadingScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

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
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <View style={styles.modalView}>
                <ActivityIndicator size="small" color="#000" />
                <Text style={styles.modalText}>Please wait...</Text>
              </View>
            </Pressable>
          </View>
        </Modal>
        <BlockWidthButton
          item={{ text: "open loading" }}
          onPress={() => setModalVisible(true)}
        />
      </View>
    </>
  );
};

export default LoadingScreen;
