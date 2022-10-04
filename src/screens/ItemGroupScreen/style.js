import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 2,
  },
  title: {
    backgroundColor: "gray",
    fontSize: 18,
    fontWeight: "500",
    paddingLeft: 10,
    paddingVertical: 8,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderColor: "gray",
    flexDirection: "row",
    marginLeft: 15,
    paddingVertical: 8,
  },
  textbold: {
    fontWeight: "500",
    marginLeft: 5,
  },
});

export default styles;
