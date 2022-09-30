import * as React from "react";
import { Pressable, View, Text, TouchableOpacity } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./style";

const CheckboxItem = ({item}) => {
    const [checked, onChange] = React.useState(false);
  
    function onCheckmarkPress() {
      onChange(!checked);
    }
  
    return (
      <TouchableOpacity style={styles.rowContainer} onPress={onCheckmarkPress}>
      <Pressable
        style={[styles.checkboxBase, checked && ( item.bgColor ? {backgroundColor: item.bgColor} : styles.checkboxChecked) ]}
        onPress={onCheckmarkPress}>
        {checked && <Ionicons name="checkmark-outline" size={20} color="white" />}
      </Pressable>
      <View style={styles.titleContainer} >
      <Text style={styles.title}>{item.title}</Text>
    </View>
    </TouchableOpacity>
    );
  };

  export default CheckboxItem;