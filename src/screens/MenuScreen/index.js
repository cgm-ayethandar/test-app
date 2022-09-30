import * as React from "react";
import {
  View,
  Text,
  Pressable,
  Modal,
  Alert,
} from "react-native";
import styles from "./style";
import BlockWidthButton from "../../Component/BlockWidthButton";
import IconMenu from "../../Component/IconMenu";

const MenuScreen = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const menuList = [
    { icon: "home", title: "Home" },
    { icon: "person-circle", title: "Profile" },
    { icon: "chatbubbles", title: "Messages" },
    { icon: "settings-outline", title: "Setting" },
  ];

  return (
    <View style={styles.container}>
      <Modal
        animationType=""
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.sideView}>
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Menu</Text>
              { menuList.map((item, key) => <IconMenu key={key} item={item} /> )}
            </View>
          </Pressable>
        </View>
      </Modal>

      <BlockWidthButton
        item={{ text: "open menu" }}
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
};

export default MenuScreen;
