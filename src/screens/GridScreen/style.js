import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  item: {
    borderColor: "gray",
    borderWidth: 1,
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
  },
});

export default styles;
