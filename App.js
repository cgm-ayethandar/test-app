// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import Accordion from './src/screens/Accordion';
import ActionSheet from './src/screens/ActionSheet';
import AlertScreen from './src/screens/Alert';
import AvatarScreen from './src/screens/AvatarScreen';
import BadgeScreen from './src/screens/Badges';
import ButtonScreen from './src/screens/ButtonScreen';
import CardScreen from './src/screens/CardScreen';
import CheckboxScreen from './src/screens/CheckboxScreen';
import ChipScreen from './src/screens/ChipScreen';
import ContentScreen from './src/screens/ContentScreen';
import DateTimeScreen from './src/screens/DateTimeScreen';
import FloatingButtonScreen from './src/screens/FloatingButtonScreen';
import GridScreen from './src/screens/GridScreen';
import InputScreen from './src/screens/InputScreen';
import ItemScreen from './src/screens/ItemScreen';
import InfiniteScrollScreen from './src/screens/InfiniteScrollScreen';
import ItemGroupScreen from './src/screens/ItemGroupScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Accordion" component={Accordion} />
        <Stack.Screen name="ActionSheet" component={ActionSheet} />
        <Stack.Screen name="Alert" component={AlertScreen} />
        <Stack.Screen name="Avatar" component={AvatarScreen} />
        <Stack.Screen name="Badges" component={BadgeScreen} />
        <Stack.Screen name="Buttons" component={ButtonScreen} />
        <Stack.Screen name="Cards" component={CardScreen} />
        <Stack.Screen name="Checkbox" component={CheckboxScreen} />
        <Stack.Screen name="Chip" component={ChipScreen} />
        <Stack.Screen name="Content" component={ContentScreen} />
        <Stack.Screen name="DateTime" component={DateTimeScreen} />
        <Stack.Screen name="FloatingButton" component={FloatingButtonScreen} />
        <Stack.Screen name="Grid" component={GridScreen} />
        <Stack.Screen name="Input" component={InputScreen} />
        <Stack.Screen name="Item" component={ItemScreen} />
        <Stack.Screen name="InfiniteScroll" component={InfiniteScrollScreen} />
        <Stack.Screen name="ItemGroup" component={ItemGroupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;