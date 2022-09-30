import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  popoverView: {
    width: "50%",
    position: "absolute",
    bottom: 333,
    left: 20,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    zIndex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  popoverTitle: {
    width: "100%",
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 18,
    fontWeight: "bold",
  },
  popoverItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10,
    borderBottomWidth: 1,
    borderColor: "#D3D3D3",
    paddingVertical: 8,
  },
});

export default styles;