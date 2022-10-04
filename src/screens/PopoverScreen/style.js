import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  popoverView: {
    backgroundColor: "white",
    borderRadius: 10,
    bottom: 333,
    elevation: 5,
    left: 20,
    padding: 20,
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: "50%",
    zIndex: 1,
  },
  popoverTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 10,
    width: "100%",
  },
  popoverItemContainer: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#D3D3D3",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    paddingVertical: 8,
  },
});

export default styles;
