import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  button: {
    borderColor: "blue",
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 10,
  },
  buttonText: {
    color: "blue",
    fontSize: 18,
    textAlign: "center",
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderColor: "gray",
    marginBottom: 20,
    marginHorizontal: 10,
    paddingBottom: 10,
    width: "95%",
  },
  title: {
    fontSize: 18,
    fontWeight: "400",
    paddingLeft: 5,
  },
});

export default styles;
