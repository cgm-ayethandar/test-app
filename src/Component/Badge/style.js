import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#D3D3D3",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    width: "95%",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    paddingLeft: 10,
  },
  badge: {
    borderRadius: 20,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: "500",
  }
});

export default styles;
