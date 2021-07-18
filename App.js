import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './app/navigation/AppNavigator';
import AuthContext from './app/auth/context';
import AuthNavigator from './app/navigation/AuthNavigator';
// to silence the faux error
import { LogBox } from 'react-native';
import OfflineNotice from './app/components/OfflineNotice';
import navigationTheme from './app/navigation/navigationTheme';

LogBox.ignoreLogs([
  "It appears that you are using old version of react-navigation library",
]);


export default function App() {
  const [user, setUser] = useState()

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user? <AppNavigator/> :<AuthNavigator/>}
      </NavigationContainer>
    </AuthContext.Provider>
  )
}
