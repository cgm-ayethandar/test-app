import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import Ionicons from "react-native-vector-icons/Ionicons";

const Accordion = () => {

    const [color, setColor] = React.useState(false);
    const [shape, setShape] = React.useState(false);
    const [number, setNumber] = React.useState(false);
    const colorArr = ['red', 'green', 'blue'];
    const shapeArr = ['Circle', 'Rectangle', 'Triangle'];
    const numberArr = ['1', '2', '3'];

  return (
    <View style={styles.container}>
      <View style={styles.accordion}>
        <TouchableOpacity onPress={() => (setColor(!color))} style={styles.accordionTitle}>
        <View style={styles.accordionText} ><Text>Color</Text></View>
        <Ionicons
        name={!color ? "caret-down-outline" : "caret-up-outline"}
        size={24}
        color="gray"
      />
        </TouchableOpacity>
        { color && <View> 
            { colorArr.map((color, key) => <Text key={key} style={styles.accordionItem}>{color}</Text>) }
        </View> } 

        <TouchableOpacity style={styles.accordionTitle} onPress={() => (setShape(!shape))}><View style={styles.accordionText} ><Text>Shapes</Text></View>
        <Ionicons
        name={!shape ? "caret-down-outline" : "caret-up-outline"}
        size={24}
        color="gray"
      /></TouchableOpacity>
        { shape && <View>
            { shapeArr.map((shape, key) => <Text key={key} style={styles.accordionItem}>{shape}</Text>) }
        </View> }

        <TouchableOpacity style={styles.accordionTitle} onPress={() => (setNumber(!number))}><View style={styles.accordionText} ><Text>Numbers</Text></View>
        <Ionicons
        name={!number ? "caret-down-outline" : "caret-up-outline"}
        size={24}
        color="gray"
      /></TouchableOpacity>
        { number && <View>
            { numberArr.map((number, key) => <Text key={key} style={styles.accordionItem}>{number}</Text>) }
        </View> }
      </View>
    </View>
  );
};

export default Accordion;
