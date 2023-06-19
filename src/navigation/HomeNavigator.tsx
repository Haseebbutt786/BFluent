import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ChooseLanguage from '../screens/ChooseLanguage';
import LanguageLevel from '../screens/LnguageLevel';
import SelectTopic from '../screens/SelectTopicScreen';

const Stack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName={'ChooseLanguage'}>
      <Stack.Screen
        name="ChooseLanguage"
        component={ChooseLanguage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LanguageLevel"
        component={LanguageLevel}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SelectTopic"
        component={SelectTopic}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
