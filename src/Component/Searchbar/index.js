import { View, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, {useState} from "react";
import RenderIf from "../RenderIf";
import styles from "./style";

const Searchbar = () => {
  const [text, setText] = useState("");

  return (
    <>
    <View style={styles.container}>
      <Ionicons name="search" size={25} color="gray" />
      <TextInput
        onChangeText={setText}
        placeholder={"Search"}
        style={styles.inputField}
        value={text}
      />
      <RenderIf isTrue={text != ""}>
      <Ionicons
          color="black"
          name="close-circle-outline"
          onPress={() => setText("")}
          size={20}
          style={styles.close}
        />
        </RenderIf>
    </View>
    </>
  );
};

export default Searchbar;
