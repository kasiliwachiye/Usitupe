import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

// to silence the faux error
import { LogBox } from 'react-native';
import OfflineNotice from './app/components/OfflineNotice';
import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';
LogBox.ignoreLogs([
  "It appears that you are using old version of react-navigation library",
]);


export default function App() {
  return (
    <React.Fragment>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator/>
      </NavigationContainer>
    </React.Fragment>
  )
}
