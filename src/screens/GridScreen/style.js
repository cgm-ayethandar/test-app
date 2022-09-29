import { StyleSheet } from "react-native";

const styles = StyleSheet.create({    
      container: {
        flex: 1,
      },
      row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 8,
      },
      item: {
        flex: 1,
        borderWidth: 1,
        borderColor: "gray",
        padding: 10,
        marginHorizontal: 5,
      }
});

export default styles;
