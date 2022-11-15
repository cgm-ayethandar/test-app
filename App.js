// In App.js in a new project
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { RootSiblingParent } from "react-native-root-siblings";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Accordion from "./src/screens/Accordion";
import ActionSheet from "./src/screens/ActionSheet";
import AlertScreen from "./src/screens/Alert";
import AvatarScreen from "./src/screens/AvatarScreen";
import BadgeScreen from "./src/screens/Badges";
import ButtonScreen from "./src/screens/ButtonScreen";
import CardScreen from "./src/screens/CardScreen";
import CheckboxScreen from "./src/screens/CheckboxScreen";
import ChipScreen from "./src/screens/ChipScreen";
import ContentScreen from "./src/screens/ContentScreen";
import CustomStatusBar from "./src/Component/CustomStatusBar";
import DateTimeScreen from "./src/screens/DateTimeScreen";
import FloatingButtonScreen from "./src/screens/FloatingButtonScreen";
import GridScreen from "./src/screens/GridScreen";
import HomeScreen from "./src/screens/HomeScreen";
import InfiniteScrollScreen from "./src/screens/InfiniteScrollScreen";
import InputScreen from "./src/screens/InputScreen";
import ItemGroupScreen from "./src/screens/ItemGroupScreen";
import ItemScreen from "./src/screens/ItemScreen";
import ListScreen from "./src/screens/ListScreen";
import LoadingScreen from "./src/screens/LoadingScreen";
import MenuScreen from "./src/screens/MenuScreen";
import ModalScreen from "./src/screens/ModalScreen";
import PickerScreen from "./src/screens/PickerScreen";
import PlayMp3Screen from "./src/screens/PlayMp3Screen";
import PopoverScreen from "./src/screens/PopoverScreen";
import RadioScreen from "./src/screens/RadioScreen";
import React from "react";
import RefresherScreen from "./src/screens/RefresherScreen";
import SearchbarScreen from "./src/screens/SearchbarScreen";
import SegmentScreen from "./src/screens/SegmentScreen";
import SelectScreen from "./src/screens/SelectScreen";
import SkeletonTextScreen from "./src/screens/SkeletonTextScreen";
import SliderScreen from "./src/screens/SliderScreen";
import ToastScreen from "./src/screens/ToastScreen";
import ToastScreen2 from "./src/screens/ToastScreen2";
import ToggleScreen from "./src/screens/ToggleScreen";
import Scanner from "./src/screens/Scanner";

const Stack = createNativeStackNavigator();

function App() {
  const statusBarStyle = "light-content";

  return (
    <>
      <RootSiblingParent>
        <SafeAreaProvider>
          <CustomStatusBar backgroundColor="black" barStyle={statusBarStyle} />
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
              <Stack.Screen
                name="FloatingButton"
                component={FloatingButtonScreen}
              />
              <Stack.Screen name="Grid" component={GridScreen} />
              <Stack.Screen name="Input" component={InputScreen} />
              <Stack.Screen name="Item" component={ItemScreen} />
              <Stack.Screen
                name="InfiniteScroll"
                component={InfiniteScrollScreen}
              />
              <Stack.Screen name="ItemGroup" component={ItemGroupScreen} />
              <Stack.Screen name="List" component={ListScreen} />
              <Stack.Screen name="Loading" component={LoadingScreen} />
              <Stack.Screen name="Searchbar" component={SearchbarScreen} />
              <Stack.Screen name="Refresher" component={RefresherScreen} />
              <Stack.Screen name="Menu" component={MenuScreen} />
              <Stack.Screen name="Modal" component={ModalScreen} />
              <Stack.Screen name="Popover" component={PopoverScreen} />
              <Stack.Screen name="Radio" component={RadioScreen} />
              <Stack.Screen name="Picker" component={PickerScreen} />
              <Stack.Screen name="Segment" component={SegmentScreen} />
              <Stack.Screen name="Toggle" component={ToggleScreen} />
              <Stack.Screen name="Toast" component={ToastScreen} />
              <Stack.Screen name="Toast2" component={ToastScreen2} />
              <Stack.Screen
                name="SkeletonText"
                component={SkeletonTextScreen}
              />
              <Stack.Screen name="Slider" component={SliderScreen} />
              <Stack.Screen name="Select" component={SelectScreen} />
              <Stack.Screen name="PlayMp3" component={PlayMp3Screen} />
              <Stack.Screen name="Scanner" component={Scanner} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </RootSiblingParent>
    </>
  );
}

export default App;
