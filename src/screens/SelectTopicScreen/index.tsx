import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {HP, WP} from '../../services';
import {useNavigation} from '@react-navigation/native';
import {Spacer} from '../../components/Spacer';
import Level from '../../components/level';
import Button from '../../components/Button';

const SelectTopic = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Button
          name={'Continue'}
          style={{
            alignSelf: 'center',
            backgroundColor: '#6B39BD',
            marginBottom: 10,
          }}
          textStyle={{
            color: '#fff',
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: '600',
          }}
          onPress={undefined}
        />
      </View>
    </SafeAreaView>
  );
};

export default SelectTopic;
