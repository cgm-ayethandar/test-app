import { ScrollView, View } from "react-native";
import AddressForm from "../../Component/AddressForm";
import BlockWidthButton from "../../Component/BlockWidthButton";
import InputField from "../../Component/InputField";
import React from "react";
import RequiredInput from "../../Component/RequiredInput";
import styles from "./style";

const InputScreen = () => {
  const requiredInputs = ["First Name", "Last Name"];

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.inputFieldContainer}>
          {requiredInputs.map((item, key) => (
            <RequiredInput key={key} item={item} />
          ))}
          <AddressForm />
          <InputField label={"Notes"} />
        </View>
        <BlockWidthButton item={{ text: "Create Account" }} />
      </ScrollView>
    </>
  );
};

export default InputScreen;
