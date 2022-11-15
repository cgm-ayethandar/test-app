import { FlatGrid } from "react-native-super-grid";
import { Text, TouchableOpacity } from "react-native";
import React from "react";
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
    { title: "InfiniteScroll", routeName: "InfiniteScroll" },
    { title: "Input", routeName: "Input" },
    { title: "Item", routeName: "Item" },
    { title: "ItemGroup", routeName: "ItemGroup" },
    { title: "List", routeName: "List" },
    { title: "Loading", routeName: "Loading" },
    { title: "Menu", routeName: "Menu" },
    { title: "Modal", routeName: "Modal" },
    { title: "Picker", routeName: "Picker" },
    { title: "Play mp3", routeName: "PlayMp3" },
    { title: "Popover", routeName: "Popover" },
    { title: "Radio", routeName: "Radio" },
    { title: "Refresher", routeName: "Refresher" },
    { title: "Searchbar", routeName: "Searchbar" },
    { title: "Segment", routeName: "Segment" },
    { title: "Select", routeName: "Select" },
    { title: "Skeleton Text", routeName: "SkeletonText" },
    { title: "Slider", routeName: "Slider" },
    { title: "Toast", routeName: "Toast" },
    { title: "Toast2", routeName: "Toast2" },
    { title: "Toggle", routeName: "Toggle" },
    { title: "Scanner", routeName: "Scanner" },

  ];

  return (
    <>
      <FlatGrid
        itemDimension={130}
        data={list}
        style={styles.gridView}
        spacing={10}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate(`${item.routeName}`)}
          >
            <Text style={styles.itemName}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

export default HomeScreen;
