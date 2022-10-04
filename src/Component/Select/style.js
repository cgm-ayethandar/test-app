import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  select: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  selectText: {
    fontSize: 16,
    fontWeight: "400",
  },
  centeredView: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginTop: 22,
  },
  modalView: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 5,
    margin: 20,
    paddingTop: 25,
    shadowColor: "#000",
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalHeaderView: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 5,
    paddingBottom: 10,
    width: "95%",
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
  modalButtomView: {
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  modalButtom: {
    borderColor: "#DCDCDC",
    width: "50%",
  },
  modalText: {
    padding: 15,
    textAlign: "center",
  },
});

export default styles;
