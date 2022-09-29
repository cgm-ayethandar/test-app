import * as React from "react";
import { View, Text } from "react-native";
import styles from "./style";
import Ionicons from "react-native-vector-icons/Ionicons";
import BasicChip from "../../Component/BasicChip";
import ColorChip from "../../Component/ColorChip";
import OutlineChip from "../../Component/OutlineChip";

const ChipScreen = () => {
  const basicChips = [
    { chipText: "default" },
    { chipText: "avatar", avatar: true },
    { chipText: "icon", icon: "checkmark-circle" },
  ];
  const colorChips = [
    { chipText: "Primary", ftColor: "blue" },
    { chipText: "Secondary", ftColor: "gray" },
    { chipText: "Tertiary", ftColor: "purple" },
    { chipText: "Success", ftColor: "green" },
    { chipText: "Warning", ftColor: "yellow" },
    { chipText: "Danger", ftColor: "red" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Basic</Text>
        <View style={styles.chipGroup}>
          {basicChips.map((item, key) => (
            <BasicChip key={key} item={item} />
          ))}
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Colors</Text>
        <View style={styles.chipGroup}>
          {colorChips.map((item, key) => (
            <ColorChip key={key} item={item} />
          ))}
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Outlines</Text>
        <View style={styles.chipGroup}>
          {colorChips.map((item, key) => (
            <OutlineChip key={key} item={item} />
          ))}
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Icons</Text>
        <View
        style={[
          styles.chip, { borderColor: "blue" },
        ]}
      >
        <Ionicons name="star" size={18} color="blue" /> 
        <Text style={[styles.chipText, {color: "blue"}]}>icon chip</Text>
        <Ionicons name="close-circle-outline" size={20} color="blue" /> 
      </View>
      </View>
    </View>
  );
};

export default ChipScreen;
