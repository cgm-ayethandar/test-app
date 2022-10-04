import { Alert, Modal, Pressable, Text, View } from "react-native";
import BlockWidthButton from "../../Component/BlockWidthButton";
import IconMenu from "../../Component/IconMenu";
import React, { useState } from "react";
import styles from "./style";

const MenuScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const menuList = [
    { icon: "home", title: "Home" },
    { icon: "person-circle", title: "Profile" },
    { icon: "chatbubbles", title: "Messages" },
    { icon: "settings-outline", title: "Setting" },
  ];

  return (
    <>
      <View style={styles.container}>
        <Modal
          animationType=""
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.sideView}>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <View style={styles.modalView}>
                <Text style={styles.modalTitle}>Menu</Text>
                {menuList.map((item, key) => (
                  <IconMenu key={key} item={item} />
                ))}
              </View>
            </Pressable>
          </View>
        </Modal>

        <BlockWidthButton
          item={{ text: "open menu" }}
          onPress={() => setModalVisible(true)}
        />
      </View>
    </>
  );
};

export default MenuScreen;
