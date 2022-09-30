import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sideView: {
    flex: 1,
  },
  modalView: {
    width: "70%",
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalTitle: {
    width: "100%",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 25,
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "gray",
    backgroundColor: "#D3D3D3",
  }
});

export default styles;