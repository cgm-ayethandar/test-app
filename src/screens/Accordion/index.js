import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";

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
        <TouchableOpacity style={styles.accordionText} onPress={() => (setColor(!color))}><Text>Color</Text></TouchableOpacity>
        { color && <View> 
            { colorArr.map((color, key) => <Text key={key} style={styles.accordionItem}>{color}</Text>) }
        </View> } 
        <TouchableOpacity style={styles.accordionText} onPress={() => (setShape(!shape))}><Text>Shapes</Text></TouchableOpacity>
        { shape && <View>
            { shapeArr.map((shape, key) => <Text key={key} style={styles.accordionItem}>{shape}</Text>) }
        </View> }
        <TouchableOpacity style={styles.accordionText} onPress={() => (setNumber(!number))}><Text>Numbers</Text></TouchableOpacity>
        { number && <View>
            { numberArr.map((number, key) => <Text key={key} style={styles.accordionItem}>{number}</Text>) }
        </View> }
      </View>
    </View>
  );
};

export default Accordion;
