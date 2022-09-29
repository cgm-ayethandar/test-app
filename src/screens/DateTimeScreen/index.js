import * as React from "react";
import { View, DatePickerIOS, Text, TouchableOpacity } from "react-native";
import styles from "./style";

const DateTimeScreen = () => {

    const [chosenDate, setChosenDate] = React.useState(new Date());

    return (
        <View>
            <DatePickerIOS
        date={chosenDate}
        onDateChange={setChosenDate}
      />
      {chosenDate && <Text>{chosenDate.getDate}</Text>}
        </View>
    );
};

export default DateTimeScreen;