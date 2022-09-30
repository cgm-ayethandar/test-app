import * as React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
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
    { title: "Chip", routeName: "Chip" },
    { title: "Content", routeName: "Content" },
    { title: "DateTime", routeName: "DateTime" },
    { title: "FloatingButtons", routeName: "FloatingButton" },
    { title: "Grid", routeName: "Grid" },
    { title: "Input", routeName: "Input" },
    { title: "Item", routeName: "Item" },
    { title: "ItemGroup", routeName: "ItemGroup" },
    { title: "InfiniteScroll", routeName: "InfiniteScroll" },
    { title: "List", routeName: "List" },
    { title: "Loading", routeName: "Loading" },
    { title: "Searchbar", routeName: "Searchbar" },
    { title: "Refresher", routeName: "Refresher" },
    { title: "Menu", routeName: "Menu" },
    { title: "Modal", routeName: "Modal" },
    { title: "Popover", routeName: "Popover" },
    { title: "Radio", routeName: "Radio" },
    { title: "Picker", routeName: "Picker" },
    { title: "Segment", routeName: "Segment" },
    { title: "Toggle", routeName: "Toggle" },
    { title: "Toast", routeName: "Toast" },
    { title: "Skeleton Text", routeName: "SkeletonText" },
    { title: "Slider", routeName: "Slider" },
    { title: "Select", routeName: "Select" },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
      {list.map((item, key) => <TouchableOpacity
        key={key}
        style={styles.item}
        onPress={() => navigation.navigate(`${item.routeName}`)}
      >
        <Text style={styles.itemText}>{item.title}</Text>
      </TouchableOpacity> )}
    </View>
    </ScrollView>
  );
};

export default HomeScreen;
