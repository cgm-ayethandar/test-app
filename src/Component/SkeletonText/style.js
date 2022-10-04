import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
    },
    profile: {
      backgroundColor: "#D3D3D3",
      height: 50,
      width: 50,
    },
    textView: {
      borderBottomColor: "#D3D3D3",
      borderBottomWidth: 1,
      flexDirection: "column",
      marginLeft: 20,
      paddingBottom: 5,
      width: "95%",
    },
    text1: {
      backgroundColor: "#D3D3D3",
      height: 20,
      marginBottom: 3,
      width: "80%",
    },
    text2: {
      backgroundColor: "#D3D3D3",
      height: 20,
      marginBottom: 3,
      width: "50%",
    },
    text3: {
      backgroundColor: "#D3D3D3",
      height: 20,
      marginBottom: 3,
      width: "30%",
    }
  });

export default styles;