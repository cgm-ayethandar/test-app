import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  modalContainer: {
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
    height: "100%",
  },
  titleContainer: {
    backgroundColor: "#D3D3D3",
    borderBottomWidth: 1,
    borderColor: "gray",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingTop: 25,
    width: "100%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default styles;
