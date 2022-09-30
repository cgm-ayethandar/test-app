import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10,
    },
    profile: {
      width: 50,
      height: 50,
      backgroundColor: "#D3D3D3",
    },
    textView: {
      width: "95%",
      flexDirection: "column",
      paddingBottom: 5,
      marginLeft: 20,
      borderBottomWidth: 1,
      borderBottomColor: "#D3D3D3",
    },
    text1: {
      width: "80%",
      height: 20,
      backgroundColor: "#D3D3D3",
      marginBottom: 3,
    },
    text2: {
      width: "50%",
      height: 20,
      backgroundColor: "#D3D3D3",
      marginBottom: 3,
    },
    text3: {
      width: "30%",
      height: 20,
      backgroundColor: "#D3D3D3",
      marginBottom: 3,
    }
  });

export default styles;