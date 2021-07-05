import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import Screen from './app/components/Screen'

export default function App() {
  return (
    <Screen>
      <TextInput placeholder="Enter name" />
    </Screen>
  );
}

const styles = StyleSheet.create({

});
