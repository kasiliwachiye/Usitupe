import React, { useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading'

import { LogBox } from 'react-native';
import { navigationRef } from './app/navigation/rootNavigation';
import AppNavigator from './app/navigation/AppNavigator';
import AuthContext from './app/auth/context';
import AuthNavigator from './app/navigation/AuthNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import navigationTheme from './app/navigation/navigationTheme';
import authStorage from './app/auth/storage';


// to silence the faux error
LogBox.ignoreLogs([
  "It appears that you are using old version of react-navigation library",
  "InvalidTokenError"
]);


export default function App() {
  const [user, setUser] = useState()
  const [isReady, setIsready] = useState(false)


  const restoreUser = async() =>{
    const user = await authStorage.getUser()
    if (user) setUser(user)
  }

  if (!isReady) return (<AppLoading startAsync={restoreUser} onError={console.warn} onFinish={() => setIsready(true)} />)

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user? <AppNavigator/> :<AuthNavigator/>}
      </NavigationContainer>
    </AuthContext.Provider>
  )
}
