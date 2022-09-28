import { StyleSheet } from "react-native";

const styles = StyleSheet.create({    
      container: {
        flex: 1,
        margin: 20,
      },
      button: {
        borderWidth: 1,
        borderColor: "blue",
        paddingVertical: 10,
        borderRadius: 10,
      },
      buttonText: {
        fontSize: 18,
        color: "blue",
        textAlign: "center",
      },
      titleContainer: {
        width: "95%",
        marginHorizontal: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: "gray",
        marginBottom: 20,
      },
      title: {
        fontSize: 18,
        fontWeight: "400",
        paddingLeft: 5,
      },
});

export default styles;
