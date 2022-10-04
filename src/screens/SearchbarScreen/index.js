import { View } from "react-native";
import React from "react";
import Searchbar from "../../Component/Searchbar";
import styles from "./style";

const SearchbarScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Searchbar />
      </View>
    </>
  );
};

export default SearchbarScreen;
