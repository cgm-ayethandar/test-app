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
        paddingVertical: 10,
        width: "83%",
    },
    title: {
        fontSize: 16,
        fontWeight: "400",
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