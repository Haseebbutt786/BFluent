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
import auth from '@react-native-firebase/auth';
import {HP} from '../../services';
import {styles} from './styles';

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
    <SafeAreaView style={{paddingHorizontal: 20, flex: 1}}>
      <View style={{paddingHorizontal: 10}}>
        <Text style={styles.headerText}>Select Level</Text>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          flex: 1,
        }}>
        <FlagList />
        <View style={{}}>
          <Button
            name={'LogOut'}
            style={{
              alignSelf: 'center',
              backgroundColor: '#6B39BD',
            }}
            onPress={() => auth().signOut()}
            textStyle={{
              color: '#fff',
              alignSelf: 'center',
              fontSize: 20,
              fontWeight: '600',
            }}
          />
          <Button
            name={'Continue'}
            style={{
              alignSelf: 'center',
              backgroundColor: '#6B39BD',
              marginVertical: 10,
            }}
            onPress={undefined}
            textStyle={{
              color: '#fff',
              alignSelf: 'center',
              fontSize: 20,
              fontWeight: '600',
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChooseLanguage;
