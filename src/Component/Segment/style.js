import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  segmentContainer: {
    flexDirection: "row",
    marginHorizontal: 5,
    borderRadius: 5,
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: 10,
  },
  segment: {
    borderRadius: 5,
    flexDirection: "column",
    width: "30%",
    padding: 6,
    justifyContent: "center",
    alignItems: "center"
    
  },
  segmentText: {
    textAlign: "center",
  },
});

export default styles;