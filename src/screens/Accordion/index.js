import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState } from "react";
import RenderIf from "../../Component/RenderIf";
import styles from "./style";

const Accordion = () => {
  const [color, setColor] = useState(false);
  const [shape, setShape] = useState(false);
  const [number, setNumber] = useState(false);
  const colorArr = ["red", "green", "blue"];
  const shapeArr = ["Circle", "Rectangle", "Triangle"];
  const numberArr = ["1", "2", "3"];

  return (
    <>
      <View style={styles.container}>
        <View style={styles.accordion}>
          <TouchableOpacity
            onPress={() => setColor(!color)}
            style={styles.accordionTitle}
          >
            <View style={styles.accordionText}>
              <Text>Color</Text>
            </View>
            <Ionicons
              color="gray"
              name={!color ? "caret-down-outline" : "caret-up-outline"}
              size={24}
            />
          </TouchableOpacity>
          <RenderIf isTrue={color}>
            <View>
              {colorArr.map((color, key) => (
                <Text key={key} style={styles.accordionItem}>
                  {color}
                </Text>
              ))}
            </View>
          </RenderIf>
          <TouchableOpacity
            style={styles.accordionTitle}
            onPress={() => setShape(!shape)}
          >
            <View style={styles.accordionText}>
              <Text>Shapes</Text>
            </View>
            <Ionicons
              color="gray"
              name={!shape ? "caret-down-outline" : "caret-up-outline"}
              size={24}
            />
          </TouchableOpacity>
          <RenderIf isTrue={shape}>
            <View>
              {shapeArr.map((shape, key) => (
                <Text key={key} style={styles.accordionItem}>
                  {shape}
                </Text>
              ))}
            </View>
          </RenderIf>
          <TouchableOpacity
            style={styles.accordionTitle}
            onPress={() => setNumber(!number)}
          >
            <View style={styles.accordionText}>
              <Text>Numbers</Text>
            </View>
            <Ionicons
              color="gray"
              name={!number ? "caret-down-outline" : "caret-up-outline"}
              size={24}
            />
          </TouchableOpacity>
          <RenderIf isTrue={number}>
            <View>
              {numberArr.map((number, key) => (
                <Text key={key} style={styles.accordionItem}>
                  {number}
                </Text>
              ))}
            </View>
          </RenderIf>
        </View>
      </View>
    </>
  );
};

export default Accordion;
