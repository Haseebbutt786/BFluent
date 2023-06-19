import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SaplashScreen from '../screens/SaplashScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignupScreen';
import ChooseLanguage from '../screens/ChooseLanguage';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName={'SaplashScreen'}>
      <Stack.Screen
        name="SaplashScreen"
        component={SaplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChooseLanguage"
        component={ChooseLanguage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
