import { StyleSheet } from "react-native";

const styles = StyleSheet.create({    
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
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
