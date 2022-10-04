import { View, Text, ScrollView } from "react-native";
import BlockWidthButton from "../../Component/BlockWidthButton";
import DefaultButton from "../../Component/DefaultButton";
import FullWidthButton from "../../Component/FullWidthButton";
import LargeButton from "../../Component/LargeButton";
import React from "react";
import SmallButton from "../../Component/SmallButton";
import styles from "./style";

const ButtonScreen = () => {
  const buttons = [
    { text: "Success", bgColor: "green" },
    { text: "Warning", bgColor: "yellow", ftColor: "black" },
    { text: "Danger", bgColor: "red" },
  ];

  const largeButtons = [
    { text: "Light", bgColor: "white", ftColor: "black" },
    { text: "Medium", bgColor: "gray" },
    { text: "Dark", bgColor: "black" },
  ];

  const blockButtons = [
    { text: "Button 1" },
    { text: "Button 2", bgColor: "#d5ded5", ftColor: "black" },
  ];

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.title}>Small Sizes</Text>
          <View style={styles.buttonGroup}>
            {buttons.map((item, key) => (
              <SmallButton key={key} item={item} />
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Default Sizes</Text>
          <View style={styles.buttonGroup}>
            {buttons.map((item, key) => (
              <DefaultButton key={key} item={item} />
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Large Sizes</Text>
          <View style={styles.buttonGroup}>
            {largeButtons.map((item, key) => (
              <LargeButton key={key} item={item} />
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Block Width</Text>
          {blockButtons.map((item, key) => (
            <BlockWidthButton key={key} item={item} />
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Full Width</Text>
          {blockButtons.map((item, key) => (
            <FullWidthButton key={key} item={item} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default ButtonScreen;
