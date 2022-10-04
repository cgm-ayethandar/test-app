import { RefreshControl, ScrollView, Text } from "react-native";
import { useState } from "react";

const InfiniteScrollScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [items, setItem] = useState([1, 2, 3, 4, 5]);

  const addMoreItems = () => {
    setRefreshing(true);
    setItem([...items, 6, 7, 8, 9]);
    setRefreshing(false);
  };

  return (
    <>
      <ScrollView
        refreshControl={
          <RefreshControl
            onRefresh={() => addMoreItems()}
            refreshing={refreshing}
            // refreshing={true}
          />
        }
      >
        {Object.entries(items).map((key, item) => {
          return <Text key={key}>{key}</Text>;
        })}
      </ScrollView>
    </>
  );
};

export default InfiniteScrollScreen;
