import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    checkboxBase: {
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: "50%",
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'transparent',
      },
      checkboxChecked: {
        backgroundColor: 'coral',
      },
      rowContainer: {
        width: "100%",
        paddingVertical: 10,
        alignItems: "center",
        flexDirection: "row",
      }, 
      titleContainer: {
        width: "90%",
        marginHorizontal: 15,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: "gray",
      },
      title: {
        fontSize: 18,
        fontWeight: "400",
        paddingLeft: 5,
      },
});

export default styles;
