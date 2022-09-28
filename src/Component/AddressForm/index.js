import * as React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./style";

const AddressForm = () => {
  const [address1, setAddress1] = React.useState("");
  const [address2, setAddress2] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [zipcode, setZipcode] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
      <Text style={styles.labelTitle}>Address</Text>
      </View>
      <TextInput style={styles.inputField} onChangeText={setAddress1} value={address1} placeholder={'Address Line 1'} />
      <TextInput style={styles.inputField} onChangeText={setAddress2} value={address2} placeholder={'Address Line 2'} />
      <TextInput style={styles.inputField} onChangeText={setCity} value={city} placeholder={'City'} />
      <TextInput style={styles.inputField} onChangeText={setState} value={state} placeholder={'State'} />
      <TextInput style={styles.inputField} onChangeText={setZipcode} value={zipcode} placeholder={'Zip Code'} />
    </View>
  );
};

export default AddressForm;
