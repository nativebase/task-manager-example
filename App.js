import React from 'react';
import { extendTheme, NativeBaseProvider } from "native-base"

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { newColorTheme } from "./utils/colorTheme";

import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";

const theme = extendTheme({ colors: newColorTheme })

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Screen2">
          <Drawer.Screen name="Screen1" component={Screen1} />
          <Drawer.Screen name="Screen2" component={Screen2} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
