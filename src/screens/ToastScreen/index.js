import * as React from "react";
import { View, Text, Pressable, Modal, Alert } from "react-native";
import styles from "./style";
import Ionicons from "react-native-vector-icons/Ionicons";
import BlockWidthButton from "../../Component/BlockWidthButton";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const ToastScreen = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const openToast = React.useCallback(() => {
    setModalVisible(true)
    wait(2000).then(() => setModalVisible(false));
  }, []);

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
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Please wait...</Text>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Ionicons name="close-circle-outline" size={20} color="black" />
            </Pressable>
          </View>
        </View>
      </Modal>

      <BlockWidthButton
        item={{ text: "Open Toast" }}
        onPress={openToast}
      />
    </View>
  );
};

export default ToastScreen;
