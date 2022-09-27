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
});

export default styles;
