import * as React from "react";
import { ScrollView, View } from "react-native";
import styles from "./style";
import RequiredInput from "../../Component/RequiredInput";
import AddressForm from "../../Component/AddressForm";
import InputField from "../../Component/InputField";
import BlockWidthButton from "../../Component/BlockWidthButton";

const InputScreen = () => {

  const requiredInputs = [ "First Name", "Last Name" ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputFieldContainer}>
      {requiredInputs.map((item, key) => <RequiredInput key={key} item={item} /> ) }
      <AddressForm />
      <InputField label={"Notes"} />
      </View>
      <BlockWidthButton item={{ text: "Create Account" }} />
    </ScrollView>
  );
};

export default InputScreen;
