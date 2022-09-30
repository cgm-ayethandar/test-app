import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
    },
    select: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    selectText: {
      fontSize: 16,
      fontWeight: "400",
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      paddingTop: 25,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    modalHeaderView: {
      width: "95%",
      paddingBottom: 10 ,
      borderBottomWidth: 1,
      borderBottomColor: "gray",
      marginBottom: 5,
    },
    modalHeader: {
      fontSize: 18,
      fontWeight: "500",
      textAlign: "center",
    },
    modalButtomView: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
    },
    modalButtom: {
      width: "50%",
      borderColor: "#DCDCDC",
    },
    modalText: {
      padding: 15,
      textAlign: "center"
    }
   
  });

export default styles;