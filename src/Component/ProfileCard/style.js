import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      flexDirection: "row",
      paddingHorizontal: 5,
      paddingVertical: 5,
      width: "95%",
    },
    textContainer: {
        borderBottomWidth: 1,
        borderColor: "#DCDCDC",
        marginLeft: 20,
        paddingBottom: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: "400",
        marginBottom: 3,
    },
    description: {
      fontSize: 16,
      fontWeight: "400",
      marginBottom: 3,
    },
    text: {
      color: "gray",
      fontSize: 14,
    },
    profile: {
      height: 50,
      marginLeft: 10,
      width: 50,
    },
  });

export default styles;