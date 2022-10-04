import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, {useState} from "react";
import RenderIf from "../RenderIf";
import styles from "./style";

const Radio = (props) => {
  const [data, setData] = useState({
    selected: false,
    selectedValue: -1,
  });

  const selectHandler = (key) => {
    setData({ selected: true, selectedValue: key });
    props.passData && props.passData(data);
  };

  return props.list.map((item, key) => (
    <>
    <TouchableOpacity
      key={key}
      onPress={() => selectHandler(key)}
      style={styles.container}
    >
      <View style={styles.textContainer}>
        <Text
          style={[styles.title, key == data.selectedValue && { color: "blue" }]}
        >
          {item}
        </Text>
      </View>
      <RenderIf isTrue={key == data.selectedValue}>
          <Ionicons name="checkmark-outline" size={20} color="blue" />
        </RenderIf>
    </TouchableOpacity>
    </>
  ));
};

export default Radio;
