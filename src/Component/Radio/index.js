import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./style";

const Radio = (props) => {

    const [data, setData] = React.useState(
      {
        selected: false,
        selectedValue: -1,
      }
    );

    const selectHandler = (key) => {
      setData({selected: true, selectedValue: key});
      props.passData(data);
    };

    return (
        props.list.map((item, key) => <TouchableOpacity key={key} onPress={() => selectHandler(key)} style={styles.container}>
        <View style={styles.textContainer}>
        <Text style={[styles.title, key == data.selectedValue && {color: "blue"} ]}>{item}</Text>
        </View>
        { key == data.selectedValue && <Ionicons
          name="checkmark"
          size={24}
          color="blue"
        /> 
       }
      </TouchableOpacity>)
    );
};

export default Radio;