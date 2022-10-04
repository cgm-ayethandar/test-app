import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    checkboxBase: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderColor: 'gray',
        borderRadius: 12,
        borderWidth: 1,
        height: 25,
        justifyContent: 'center',
        width: 25,
      },
      checkboxChecked: {
        backgroundColor: 'coral',
      },
      rowContainer: {
        alignItems: "center",
        flexDirection: "row",
        paddingVertical: 10,
        width: "100%",
      }, 
      titleContainer: {
        borderBottomWidth: 1,
        borderColor: "gray",
        marginHorizontal: 15,
        paddingBottom: 10,
        width: "90%",
      },
      title: {
        fontSize: 18,
        fontWeight: "400",
        paddingLeft: 5,
      },
});

export default styles;
