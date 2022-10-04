import { Text, View } from "react-native";
import BlockWidthButton from "../../Component/BlockWidthButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState } from "react";
import RenderIf from "../../Component/RenderIf";
import styles from "./style";

const PopoverScreen = () => {
  const [popover, setPopover] = useState(false);
  const titles = ["Learn ionic", "Documentation", "Showcase", "GitHub Repo"];

  return (
    <>
      <View style={styles.container}>
        <RenderIf isTrue={popover}>
          <View style={styles.popoverView}>
            <Text style={styles.popoverTitle}>Popover</Text>
            {titles.map((title, key) => (
              <View key={key} style={styles.popoverItemContainer}>
                <Text>{title}</Text>
                <Ionicons
                  color="gray"
                  name="chevron-forward-outline"
                  size={22}
                />
              </View>
            ))}
          </View>
        </RenderIf>
        <BlockWidthButton
          item={{ text: "Open popover" }}
          onPress={() => setPopover(!popover)}
        />
      </View>
    </>
  );
};

export default PopoverScreen;
