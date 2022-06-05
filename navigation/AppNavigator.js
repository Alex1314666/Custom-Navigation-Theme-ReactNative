import React,{useState,useEffect} from 'react';
import {NavigationContainer, DefaultTheme, DarkTheme, useTheme} from '@react-navigation/native';
// npm install @react-navigation/stack
// expo install react-native-gesture-handler
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

// npm install --save react-native-event-listeners
import { EventRegister } from 'react-native-event-listeners';

const Stack = createStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      bodyText: 'rgb(255, 45, 0)',
    },
  };

  const MyDTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      bodyText: 'rgb(255, 255, 255)',
    },
  };
function AppNavigator() {
    const [darkMode, setDarkMode] = useState(false);
    const appTheme =  darkMode? MyDTheme: MyTheme;

    useEffect(()=>{
        let eventListener = EventRegister.addEventListener(
            'changeThemeEvent',
            data =>{
                setDarkMode(data);
            },
        );
        return () => {
            EventRegister.removeEventListener(eventListener);
        };
    },[]);
    return (
        // wrap the whole app in NavigationContainer
        <NavigationContainer theme={appTheme}>
            <Stack.Navigator>
                {/* Rest each screen */}
                
                <Stack.Screen
                    name = "HomeScreen"
                    component = {HomeScreen}
                >
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default AppNavigator;