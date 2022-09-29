import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderBottomWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  labelTitle: {
    fontSize: 18,
    fontWeight: "400",
  },
  inputField: {
    marginBottom: 5,
    height: 25,
  }
});

export default styles;
