import * as React from "react";
import { View, Text } from "react-native";
import styles from "./style";

const GridScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.item}>
          <Text>1 of 2</Text>
        </View>
        <View style={styles.item}>
          <Text>2 of 2</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.item}>
          <Text>1 of 3</Text>
        </View>
        <View style={styles.item}>
          <Text>2 of 3</Text>
        </View>
        <View style={styles.item}>
          <Text>3 of 3</Text>
        </View> 
      </View>

      <View style={styles.row}>
        <View style={styles.item}>
          <Text>1 of 3</Text>
        </View>
        <View style={styles.item}>
          <Text>2 of 3</Text>
        </View>
        <View style={styles.item}>
          <Text>3 of 3</Text>
        </View> 
      </View>

      <View style={styles.row}>
        <View style={styles.item}>
          <Text>1 of 4</Text>
        </View>
        <View style={styles.item}>
          <Text>2 of 4</Text>
        </View>
        <View style={styles.item}>
          <Text>3 of 4</Text>
        </View>
        <View style={styles.item}>
          <Text>4 of 4</Text>
        </View> 
      </View>
    </View>
  );
};

export default GridScreen;
