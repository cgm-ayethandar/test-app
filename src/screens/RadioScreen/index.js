import * as React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import Radio from "../../Component/Radio";

const RadioScreen = () => {

    const list = ["Apple", "Orange", "Lime"];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fruits</Text>
            <Radio list={list} />
        </View>
    );
};

export default RadioScreen;