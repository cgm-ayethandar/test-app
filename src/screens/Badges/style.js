import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#D3D3D3",
  },
  title: {
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: "500",
  },
  badge: {
    backgroundColor: "blue",
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: "50%",
  },
  badgeText: {
    fontSize: 14,
    color: "white",
    fontWeight: "500",
  }
});

export default styles;