import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";

const RefresherScreen = () => {
  const [refreshing, setRefreshing] = useState(true);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = () => {
    fetch("https://randomuser.me/api/?results=8")
      .then((response) => response.json())
      .then((responseJson) => {
        setRefreshing(false);
        // var newdata = userData.concat(responseJson.results);
        var newdata = [...responseJson.results, ...userData];
        setUserData(newdata);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const ItemView = ({ item }) => {
    return (
      <Text
        style={{
          fontSize: 20,
          padding: 10,
        }}
      >
        {item.name.first} {item.name.last}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          backgroundColor: "#C8C8C8",
          height: 1,
          width: "100%",
        }}
      />
    );
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
        {refreshing ? <ActivityIndicator /> : null}
        <FlatList
          data={userData}
          enableEmptySections={true}
          ItemSeparatorComponent={ItemSeparatorView}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ItemView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={loadUserData} />
          }
        />
      </SafeAreaView>
    </>
  );
};

export default RefresherScreen;
