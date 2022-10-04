import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, {useState} from "react";
import RenderIf from "../RenderIf";
import styles from "./style";

const Segment = ({ list }) => {
  const [selectedValue, setSelectedValue] = useState(0);

  return (
    <>
    <View style={styles.segmentContainer}>
      {list.map((item, key) => (
        <TouchableOpacity
          style={[
            styles.segment,
            key == selectedValue
              ? {
                  backgroundColor: "#DCDCDC",
                  borderWidth: 1,
                  borderColor: "gray",
                }
              : { backgroundColor: "transparent" },
          ]}
          key={key}
          onPress={() => setSelectedValue(key)}
        >
          <RenderIf isTrue={item.icon}>
          <Ionicons name={item.icon} size={24} color="gray" />
        </RenderIf>
        <RenderIf isTrue={item.text}>
        <Text style={styles.segmentText}>{item.text}</Text>
        </RenderIf>
        </TouchableOpacity>
      ))}
    </View>
    </>
  );
};

export default Segment;
