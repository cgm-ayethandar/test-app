import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  segmentContainer: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginHorizontal: 5,
    padding: 5,
  },
  segment: {
    alignItems: "center",
    borderRadius: 5,
    flexDirection: "column",
    justifyContent: "center",
    padding: 6,
    width: "30%",
    
  },
  segmentText: {
    textAlign: "center",
  },
});

export default styles;