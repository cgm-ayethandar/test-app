import * as React from "react";
import { View, Text, Button, Alert } from "react-native";
import styles from "./style";
import Badge from "../../Component/Badge";

const BadgeScreen = () => {

    const list = [
        { title: "Followers", badgeText: "22k", bgColor: "blue" },
        { title: "Likes", badgeText: "118k", bgColor: "green" },
        { title: "Stars", badgeText: "34k", bgColor: "orange" },
        { title: "Completed", badgeText: "80", bgColor: "green" },
        { title: "Unread", badgeText: "3", bgColor: "#D3D3D3", ftColor: "Black" },
        { title: "Warnings", badgeText: "70", bgColor: "yellow", ftColor: "Black" },
        { title: "Notifications", badgeText: "1000", bgColor: "purple" },
        { title: "Drafts", badgeText: "14" },
        { title: "Deleted", badgeText: "4", bgColor: "red" },
      ];

    return (
        <View style={styles.container}>
            {list.map((item, key) => <Badge key={key} item={item} />)}
        </View>
    );
};

export default BadgeScreen;
