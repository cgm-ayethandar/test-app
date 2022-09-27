import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";

const HomeScreen = ({ navigation }) => {
  
  const list = [
    { title: "Accordion", routeName: "Accordion" },
    { title: "Action Sheet", routeName: "ActionSheet" },
    { title: "Alert", routeName: "Alert" },
    { title: "Avatar", routeName: "Avatar" },
    { title: "Badges", routeName: "Badges" },
    { title: "Buttons", routeName: "Buttons" },
    { title: "Cards", routeName: "Cards" },
    { title: "Checkbox", routeName: "Checkbox" },
  ];

  return (
    <View style={styles.container}>
      {list.map((item, key) => <TouchableOpacity
        key={key}
        style={styles.item}
        onPress={() => navigation.navigate(`${item.routeName}`)}
      >
        <Text style={styles.itemText}>{item.title}</Text>
      </TouchableOpacity> )}
    </View>
  );
};

export default HomeScreen;
