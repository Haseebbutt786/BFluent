import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import HomeNavigator from './src/navigation/HomeNavigator';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return () => subscriber(); // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <HomeNavigator /> : <RootNavigator />}
    </NavigationContainer>
  );
};

export default App;
