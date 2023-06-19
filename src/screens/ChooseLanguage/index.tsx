import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Flag from 'react-native-country-flag';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';

const ChooseLanguage = () => {
  const navigation = useNavigation();
  const countryCodes = [
    'US',
    'GB',
    'FR',
    'DE',
    'ES',
    'IT',
    'JP',
    'CN',
    'IN',
    'BR',
    'AU',
    'CA',
  ];

  const FlagList = () => {
    const renderItem = ({item}) => (
      <TouchableOpacity
        onPress={() => navigation.navigate('LanguageLevel' as never)}
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <Flag
          isoCode={item}
          size={65}
          style={{marginTop: 40, borderRadius: 5}}
        />
      </TouchableOpacity>
    );

    return (
      <View style={{}}>
        <FlatList
          data={countryCodes}
          keyExtractor={item => item}
          renderItem={renderItem}
          numColumns={3} // Adjust the number of columns as desired
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View
        style={{
          // alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          paddingVertical: 10,
          height: '100%',
          // width: '100%',
        }}>
        <FlagList />
        <Button
          name={'Continue'}
          style={{alignSelf: 'center', backgroundColor: '#6B39BD'}}
          onPress={undefined}
          textStyle={{
            color: '#fff',
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: '600',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChooseLanguage;
