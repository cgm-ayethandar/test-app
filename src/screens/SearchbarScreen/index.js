import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./style";
import Searchbar from "../../Component/Searchbar";

const SearchbarScreen = () => {
    return (
        <View style={styles.container}>
            <Searchbar />
        </View>
    );
};

export default SearchbarScreen;