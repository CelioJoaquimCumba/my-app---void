import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "./global.css"
import React from 'react';
import { MainPage } from './src/pages/main';
import { UserProvider } from './src/providers/UserProvider';

export default function App() {
  return (
    <UserProvider>
      <MainPage />
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
