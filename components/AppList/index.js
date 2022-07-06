import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import * as C from './styles'
 
export default function AppList() {
  return (
    <C.Container>
      <Text>List!</Text>
      <StatusBar style="light" />
    </C.Container>
  );
}
