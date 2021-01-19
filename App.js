import React from 'react';
import { extendTheme, NativeBaseProvider } from "native-base"

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { newColorTheme } from "./utils/colorTheme";

import CalenderScreen from "./screens/CalenderScreen";
import CampaignScreen from "./screens/CampaignScreen";

const theme = extendTheme({ colors: newColorTheme })

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="calender">
          <Drawer.Screen name="calender" component={CalenderScreen} />
          <Drawer.Screen name="campaign" component={CampaignScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
