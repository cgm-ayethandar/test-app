import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      width: "95%",
      flexDirection: "row",
      paddingVertical: 5,
      marginHorizontal: 5,
      alignItems: "center",
      borderBottomWidth: 1,
      borderColor: "#DCDCDC",
    },
    textContainer: {
        marginLeft: 25,
        paddingBottom: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: "400",
        marginBottom: 3,
    },
    text: {
        fontSize: 14,
        color: "gray",
    },
    profile: {
      width: 40,
      height: 40,
      marginLeft: 10,
    },
  });

export default styles;