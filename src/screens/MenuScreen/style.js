import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  sideView: {
    flex: 1,
  },
  modalView: {
    alignItems: "center",
    backgroundColor: "white",
    elevation: 5,
    height: "100%",
    width: "70%",
    shadowColor: "#000",
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalTitle: {
    backgroundColor: "#D3D3D3",
    borderBottomWidth: 1,
    borderColor: "gray",
    fontSize: 18,
    fontWeight: "bold",
    padding: 16,
    paddingTop: 25,
    textAlign: "center",
    width: "100%",
  },
});

export default styles;
