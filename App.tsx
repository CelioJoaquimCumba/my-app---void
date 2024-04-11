import { StatusBar } from 'expo-status-bar';
import {  View, Text } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import "./global.css"
import React from 'react';
import { MainPage } from './src/pages/main';
import { UserProvider } from './src/providers/UserProvider';

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <UserProvider>
      <MainPage />
    </UserProvider>
  );
}
