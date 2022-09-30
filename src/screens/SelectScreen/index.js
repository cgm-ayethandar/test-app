import * as React from "react";
import { View, Text} from "react-native";
import styles from "./style";
import Select from "../../Component/Select";

const SelectScreen = () => {
  
  const selectList = [
    { title: "Origin", items: ["Madison", "Chicago", "Austin"] },
    { title: "Destination", items: ["New York", "Honolulu", "Baltimore"] },
  ];

    return (
      <View style={styles.container}>
        <Text style={styles.title} >Select Trip</Text>
        { selectList.map((item, key) => <View key={key} style={styles.selectContainer}>
          <Select item={item} />
        </View>) }
      </View>
    );
  };
  
  export default SelectScreen;