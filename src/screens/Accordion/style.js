import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  accordion: {
    borderBottomWidth: 1,
    borderColor: "gray",
    width: "95%",
  },
  accordionTitle: {
    alignItems: "center",
    borderColor: "gray",
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  accordionText: {
    paddingLeft: 10,
    paddingVertical: 10,
  },
  accordionItem: {
    borderColor: "gray",
    borderTopWidth: 1,
    paddingLeft: 20,
    paddingVertical: 8,
  },
});

export default styles;
