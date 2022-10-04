import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "gray",
    flexDirection: "column",
    marginBottom: 10,
  },
  labelContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 5,
  },
  labelTitle: {
    fontSize: 18,
    fontWeight: "400",
  },
  star: {
    color: "red",
    marginLeft: 10,
  },
  inputField: {
    height: 25,
    marginBottom: 5,
  }
});

export default styles;
