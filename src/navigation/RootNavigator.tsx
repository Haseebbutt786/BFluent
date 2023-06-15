import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SaplashScreen from '../screens/SaplashScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();

const TestScreen = () => (
  <View>
    <Text>Splash Screen</Text>
  </View>
);

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
    </Stack.Navigator>
  );
}
