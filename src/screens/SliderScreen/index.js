import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
// import styles from "./style";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const slideList = Array.from({ length: 30 }).map((_, i) => {
  return {
    id: i,
    image: `https://picsum.photos/1440/2842?random=${i}`,
    title: `This is the title! ${i + 1}`,
    subtitle: `This is the subtitle ${i + 1}!`,
  };
});

const styles = StyleSheet.create({
  slide: {
    alignItems: "center",
    height: windowHeight,
    justifyContent: "center",
    width: windowWidth,
  },
  slideImage: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.7,
  },
  slideTitle: {
    fontSize: 24,
  },
  slideSubtitle: {
    fontSize: 18,
  },

  pagination: {
    position: "absolute",
    bottom: 8,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  paginationDotActive: {
    backgroundColor: "lightblue",
  },
  paginationDotInactive: {
    backgroundColor: "gray",
  },
  carousel: {
    flex: 1,
  },
});

function Slide({ data }) {
  return (
    <View
      style={{
        alignItems: "center",
        height: windowHeight,
        justifyContent: "center",
        width: windowWidth,
      }}
    >
      <Image
        source={{ uri: data.image }}
        style={{ width: windowWidth * 0.9, height: windowHeight * 0.7 }}
      ></Image>
      <Text style={{ fontSize: 24 }}>{data.title}</Text>
      <Text style={{ fontSize: 18 }}>{data.subtitle}</Text>
    </View>
  );
}

const SliderScreen = () => {
  return (
    <>
      <FlatList
        data={slideList}
        horizontal
        pagingEnabled
        renderItem={({ item }) => {
          return <Slide data={item} />;
        }}
        style={{ flex: 1 }}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default SliderScreen;
