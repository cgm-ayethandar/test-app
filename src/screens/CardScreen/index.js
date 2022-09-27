import * as React from "react";
import { View, ScrollView, Text, Image } from "react-native";
import Card from "../../Component/Card";

const CardScreen = () => {
  return (
    <ScrollView>
    <Card />
    <Card />
    </ScrollView>
  );
};

export default CardScreen;
