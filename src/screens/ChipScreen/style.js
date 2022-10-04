import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10,
  },
  section: {
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 5,
  },
  chipGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  chip: {
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 6,
    width: "37%",
  },
  chipText: {
    fontSize: 14,
    fontWeight: "500",
    marginHorizontal: 8,
  },
});

export default styles;
