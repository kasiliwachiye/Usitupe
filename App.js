import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
// to silence the faux error
import { LogBox } from 'react-native';
LogBox.ignoreLogs([
  "It appears that you are using old version of react-navigation library",
]);


export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
