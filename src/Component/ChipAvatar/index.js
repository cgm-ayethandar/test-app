import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";

const ChipAvatar = () => {
    return (
        <View style={styles.container}>
            <Image
          style={styles.profile}
          source={require("../../../assets/profile.png")}
        />
        <Text style={styles.text}>Kit Bishop</Text>
        </View>
    );
};

export default ChipAvatar;