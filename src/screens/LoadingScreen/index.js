import * as React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Pressable,
  Modal,
  Alert,
} from "react-native";
import styles from "./style";
import BlockWidthButton from "../../Component/BlockWidthButton";

const LoadingScreen = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

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
  );
};

export default LoadingScreen;
