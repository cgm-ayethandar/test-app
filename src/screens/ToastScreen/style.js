import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  centeredView: {
    bottom: 10,
    position: "absolute",
    width: "100%",
  },
  modalView: {
    alignItems: "center",
    backgroundColor: "#DCDCDC",
    borderRadius: 10,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalText: {
    textAlign: "center",
  },
});

export default styles;
