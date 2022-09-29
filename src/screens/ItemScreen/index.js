import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./style";
import IconItem from "../../Component/IconItem";
import Badge from "../../Component/Badge";
import CheckboxField from "../../Component/CheckboxField";

const ItemScreen = () => {

    const iconItems = [
        { icon: "star", label: "Star" },
        { icon: "heart", label: "Heart" },
    ];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Icon Items</Text>
            <View style={styles.itemContainer}>
                { iconItems.map((item, key) => <IconItem key={key} item={item} /> ) }
            </View>
            <Text style={styles.title}>Inputs and Controls</Text>
            <View style={styles.itemContainer}>
                <Badge item={{ title: "Followers", badgeText: "22k" }} />
                <CheckboxField item={{ label: "Checkbox" }} />
            </View>
        </ScrollView>
    );
};

export default ItemScreen;