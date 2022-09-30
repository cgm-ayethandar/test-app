import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./style";

const ContentScreen = () => {
  const list = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
  ];
  const scrollRef = React.useRef();

const scrollToTop = () => {
  scrollRef.current?.scrollTo({
    y: 0,
    animated: true,
  });
}

const scrollToBottom = () => {
    scrollRef.current?.scrollToEnd();
  }  

  return (
    <ScrollView ref={scrollRef} style={styles.container}>
        <TouchableOpacity style={styles.buttom} onPress={scrollToBottom}
        ><Text style={styles.buttonText} >Scroll to botton</Text></TouchableOpacity>
      {list.map((item, key) => (
        <View style={styles.titleContainer}>
          <Text key={key} style={styles.title}>
            Item {item}
          </Text>
        </View>
      ))}
      <TouchableOpacity style={styles.button} onPress={scrollToTop}
        ><Text style={styles.buttonText} >Scroll to top</Text></TouchableOpacity>
    </ScrollView>
  );
};

export default ContentScreen;
