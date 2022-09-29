import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    paddingVertical: 8,
    paddingLeft: 10,
    backgroundColor: "gray",
  },
  itemContainer: {
    flexDirection: "row",
    marginLeft: 15,
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingVertical: 8,
  },
  textbold: {
    marginLeft: 5,
    fontWeight: "500",
  },
});

export default styles;