import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      borderBottomWidth: 1,
      borderColor: "#DCDCDC",
      flexDirection: "row",
      marginHorizontal: 5,
      paddingVertical: 5,
      width: "95%",
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
        color: "gray",
        fontSize: 14,
    },
    profile: {
      height: 40,
      marginLeft: 10,
      width: 40,
    },
  });

export default styles;