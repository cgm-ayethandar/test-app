import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Modal,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Radio from "../Radio";
import React, {useState} from "react";
import RenderIf from "../RenderIf";
import styles from "./style";

const Select = ({ item }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [radioData, setRadioData] = useState({
    selected: false,
    selectedValue: -1,
  });

  const passData = (data) => {
    setRadioData(data);
  };

  return (
    <>
      <View style={styles.container}>
        <Modal
          animationType="none"
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
                <View style={styles.modalHeaderView}>
                  <Text style={styles.modalHeader}>{item.title}</Text>
                </View>
                <Radio list={item.items} passData={passData} />
                <View style={styles.modalButtomView}>
                  <TouchableOpacity
                    style={[styles.modalButtom, { borderRightWidth: 1 }]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.modalText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalButtom}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.modalText}>OK</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Pressable>
          </View>
        </Modal>
        <Text>{item.title}</Text>

        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.select}
        >
           <RenderIf isTrue={radioData.selected}>
           <Text style={styles.selectText}>
              {item.items[radioData.selectedValue]}
            </Text>
        </RenderIf>
        <RenderIf isTrue={!radioData.selected}>
        <Text style={[styles.selectText, { color: "gray" }]}>
              Select Airport
            </Text>
        </RenderIf>
          <Ionicons color="gray" name="caret-down-outline" size={25} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Select;
