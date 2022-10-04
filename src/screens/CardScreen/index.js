import React from "react";
import { ScrollView } from "react-native";
import Card from "../../Component/Card";

const CardScreen = () => {
  return (
    <>
      <ScrollView>
        <Card />
        <Card />
      </ScrollView>
    </>
  );
};

export default CardScreen;
