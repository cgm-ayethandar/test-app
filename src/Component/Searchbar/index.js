import * as React from "react";
import { View, Text, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./style";

const Searchbar = () => {

    const [text, setText] = React.useState('');

    return (
        <View style={styles.container}>
            <Ionicons
        name="search"
        size={25}
        color="gray"
      />
            <TextInput style={styles.inputField} onChangeText={setText} value={text} placeholder={'Search'} />
            {text != '' &&  <Ionicons onPress={() => setText('')} style={styles.close} name="close-circle-outline" size={20} color="black" /> } 
        </View>
    );
};

export default Searchbar;