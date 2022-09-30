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
        width: "83%",
        marginLeft: 20,
        borderBottomWidth: 1,
        borderColor: "#DCDCDC",
        paddingVertical: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: "400",
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