import { View, Text, TextInput } from "react-native";
import React, {useState} from "react";
import styles from "./style";

const AddressForm = () => {
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");

  return (
    <>
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.labelTitle}>Address</Text>
      </View>
      <TextInput
        onChangeText={setAddress1}
        placeholder={"Address Line 1"}
        style={styles.inputField}
        value={address1}
      />
      <TextInput
        onChangeText={setAddress2}
        placeholder={"Address Line 2"}
        style={styles.inputField}
        value={address2}
      />
      <TextInput
        onChangeText={setCity}
        placeholder={"City"}
        style={styles.inputField}
        value={city}
      />
      <TextInput
        onChangeText={setState}
        placeholder={"State"}
        style={styles.inputField}
        value={state}
      />
      <TextInput
        onChangeText={setZipcode}
        placeholder={"Zip Code"}
        style={styles.inputField}
        value={zipcode}
      />
    </View>
    </>
  );
};

export default AddressForm;
