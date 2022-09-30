import * as React from "react";
import {
  View,
  Text
} from "react-native";
import styles from "./style";
import Ionicons from "react-native-vector-icons/Ionicons";
import BlockWidthButton from "../../Component/BlockWidthButton";

const PopoverScreen = () => {

  const [popover, setPopover] = React.useState(false);
  const titles = ["Learn ionic", "Documentation", "Showcase", "GitHub Repo"];

  return (
    <View style={styles.container}>
      {popover && <View style={styles.popoverView}>
        <Text style={styles.popoverTitle}>Popover</Text>
        { titles.map((title, key) => <View key={key} style={styles.popoverItemContainer}>
                <Text>{title}</Text>
                <Ionicons
        name="chevron-forward-outline"
        size={22}
        color="gray"
      />
            </View> )}
      </View>} 
      <BlockWidthButton
        item={{ text: "Open popover" }}
        onPress={() => setPopover(!popover)}
      />
    </View>
  );
};

export default PopoverScreen;
