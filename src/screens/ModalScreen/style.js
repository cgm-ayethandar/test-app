import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingTop: 25,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "gray",
    backgroundColor: "#D3D3D3",
  },
  modalTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
  }
});

export default styles;