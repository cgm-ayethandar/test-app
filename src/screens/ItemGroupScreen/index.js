import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./style";

const ItemGroupScreen = () => {

    const itemA = [
        { boldText: "Abigail" },
        { text: "Jesse", boldText: "Adams" },
        { boldText: "Alan" },
    ];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>A</Text>
            {itemA.map((item, key) => <View key={key} style={styles.itemContainer}>
                <Text>{item.text}</Text>
                <Text style={styles.textbold}>{item.boldText}</Text>
            </View> )}
            <Text style={styles.title}>B</Text>
        </ScrollView>
    );
};

export default ItemGroupScreen;