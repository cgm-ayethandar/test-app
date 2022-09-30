import React, { useState } from "react";
import { View, Text, TouchableOpacity, Pressable,
  Modal,
  Alert, } from "react-native";
import styles from "./style";
import Ionicons from "react-native-vector-icons/Ionicons";
import Radio from "../Radio";

const Select = ({item}) => {

  const [modalVisible, setModalVisible] = React.useState(false);
  const [radioData, setRadioData] = React.useState(
    {
      selected: false,
      selectedValue: -1,
    }
  );

  const passData = (data) => {
    setRadioData(data);
  };

  React.useEffect(() => {
    
  }, []);

  return (
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
              <TouchableOpacity style={[styles.modalButtom, { borderRightWidth: 1,}]} onPress={() => setModalVisible(!modalVisible)}><Text style={styles.modalText}>Cancel</Text></TouchableOpacity>
              <TouchableOpacity style={styles.modalButtom} onPress={() => setModalVisible(!modalVisible)}><Text style={styles.modalText}>OK</Text></TouchableOpacity>
            </View>
            </View>
          </Pressable>
        </View>
      </Modal>
     <Text>{item.title}</Text>

     <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.select}>
      {radioData.selected ? <Text style={styles.selectText}>{item.items[radioData.selectedValue]}</Text> : <Text style={[styles.selectText, {color: "gray",}]}>Select Airport</Text> }
      <Ionicons
        name="caret-down-outline"
        size={25}
        color="gray"
      />
     </TouchableOpacity>
    </View>
  );
}

export default Select;