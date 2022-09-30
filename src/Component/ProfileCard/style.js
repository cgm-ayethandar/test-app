import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      width: "95%",
      flexDirection: "row",
      paddingVertical: 5,
      paddingHorizontal: 5,
      alignItems: "center",
    },
    textContainer: {
        marginLeft: 20,
        borderBottomWidth: 1,
        borderColor: "#DCDCDC",
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
        fontSize: 14,
        color: "gray",
    },
    profile: {
      width: 50,
      height: 50,
      marginLeft: 10,
    },
  });

export default styles;