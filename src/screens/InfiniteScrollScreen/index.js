import { FunctionComponent, useState } from "react";
import { RefreshControl, ScrollView, Text } from "react-native";

const InfiniteScrollScreen = () => {
  const [items, setItem] = useState([1, 2, 3, 4, 5]);

  const addMoreItems = () => {
    setItem([...items, 6, 7, 8, 9]);
  };

  return (
    <>
      <ScrollView
        refreshControl={
          <RefreshControl
            onRefresh={() => addMoreItems()}
            // refreshing={true}
          />
        }
      >
        {
          Object.entries(items).map((key, item) => {
            return (
              <Text key={key}>{item}</Text>
            );
          })
        }
      </ScrollView>
    </>
  );
};

export default InfiniteScrollScreen;
