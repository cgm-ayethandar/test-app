import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  gridView: {
    flex: 1,
    marginTop: 10,
  },
  itemContainer: {
    alignItems: "center",
    backgroundColor: "#DCDCDC",
    borderRadius: 5,
    height: 150,
    justifyContent: 'center',
    padding: 10,
  },
  itemName: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    textAlign: "center",
  },
});

export default styles;
