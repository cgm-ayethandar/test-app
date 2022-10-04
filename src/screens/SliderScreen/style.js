import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  slide: {
    alignItems: "center",
    height: windowHeight,
    justifyContent: "center",
    width: windowWidth,
  },
  slideImage: {
    height: windowHeight * 0.7,
    width: windowWidth * 0.9,
  },
  slideTitle: {
    fontSize: 24,
  },
  slideSubtitle: {
    fontSize: 18,
  },
  pagination: {
    bottom: 8,
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
  },
  paginationDot: {
    borderRadius: 4,
    height: 8,
    marginHorizontal: 2,
    width: 8,
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

export default styles;
