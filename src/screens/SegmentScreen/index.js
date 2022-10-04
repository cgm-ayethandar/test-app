import { View } from "react-native";
import React from "react";
import Segment from "../../Component/Segment";
import styles from "./style";

const SegmentScreen = () => {
  const list1 = [{ text: "Call" }, { text: "Favorite" }, { text: "Map" }];

  const list2 = [{ icon: "call" }, { icon: "heart" }, { icon: "map" }];

  const list3 = [
    { icon: "call", text: "Call" },
    { icon: "heart", text: "Favorite" },
    { icon: "map", text: "Map" },
  ];

  return (
    <>
      <View style={styles.container}>
        <View style={styles.segmentContainer}>
          <Segment list={list1} />
        </View>
        <View style={styles.segmentContainer}>
          <Segment list={list2} />
        </View>
        <View style={styles.segmentContainer}>
          <Segment list={list3} />
        </View>
      </View>
    </>
  );
};

export default SegmentScreen;
