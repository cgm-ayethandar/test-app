import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  accordion: {
    width: "95%",
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  accordionTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "gray",
    paddingVertical: 5,
  },
  accordionText: {
    paddingLeft: 10,
    paddingVertical: 10,
  },
  accordionItem: {
    paddingLeft: 20,
    borderTopWidth: 1,
    borderColor: "gray",
    paddingVertical: 8,
  },
});

export default styles;
