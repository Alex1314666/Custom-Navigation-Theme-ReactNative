import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import { EventRegister } from 'react-native-event-listeners';

import { useTheme } from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
    const [darkMode, setDarkMode] = useState(false);
    const {colors} = useTheme();
    return(
        <View style={{color:colors.card}}>
            <Text style ={{color:colors.bodyText}}>Hello World!</Text>
            <Switch value={darkMode} onValueChange = {(value) => {
                                                setDarkMode(value);
                                                EventRegister.emit('changeThemeEvent',value);
                                                }} />
        </View>
    );
}

export default HomeScreen;