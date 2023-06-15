import 'react-native-gesture-handler';
import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';

const App = () => {
  return (
    // <Text>Hello</Text>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
