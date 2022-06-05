import React,{useState} from 'react';

// npm install @react-navigation/native
// expo install react-native-screens react-native-safe-area-context
// import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';


export default function App() {
  // const [mode, setMode] = useState(false);
  // const appTheme = darkApp ? DarkTheme : DefaultTheme
  return (
    <AppNavigator />
  );
}
