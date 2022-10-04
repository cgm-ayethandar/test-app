import { View, DatePickerIOS, Text } from "react-native";
import React, { useState } from "react";

const DateTimeScreen = () => {
  const [chosenDate, setChosenDate] = useState(new Date());

  return (
    <>
      <View>
        <DatePickerIOS date={chosenDate} onDateChange={setChosenDate} />
        {chosenDate && <Text>{chosenDate.getDate}</Text>}
      </View>
    </>
  );
};

export default DateTimeScreen;
