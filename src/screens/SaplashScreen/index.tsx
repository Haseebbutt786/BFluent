import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const SaplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginScreen' as never);
    }, 3000);
  }, []);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          //   backgroundColor: 'orange',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{
            height: '15%',
            width: '72%',
            alignSelf: 'center',
          }}
          source={require('../../assets/images/Group.png')}
        />
      </View>
    </View>
  );
};

export default SaplashScreen;

const styles = StyleSheet.create({});
