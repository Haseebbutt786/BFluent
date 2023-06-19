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

const LanguageLevel = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{
                height: HP('5'),
                width: WP('11'),
                marginHorizontal: 10,
              }}
              source={require('../../assets/images/backbutton.png')}
            />
          </TouchableOpacity>

          <Text style={styles.headerText}>Select Level</Text>
        </View>
        {/* <Spacer.Column numberOfSpaces={8} /> */}
        <ScrollView style={{paddingVertical: 30}}>
          <Level
            name={'Beginner'}
            style={undefined}
            onPress={undefined}
            textStyle={undefined}
            source={require('../../assets/images/launch.png')}
          />
          <Spacer.Column numberOfSpaces={5} />
          <Level
            name={'Elementary'}
            style={undefined}
            onPress={undefined}
            textStyle={undefined}
            source={require('../../assets/images/launch1.png')}
          />
          <Spacer.Column numberOfSpaces={5} />
          <Level
            name={'Intermediate'}
            style={undefined}
            onPress={undefined}
            textStyle={undefined}
            source={require('../../assets/images/launch2.png')}
          />
          <Spacer.Column numberOfSpaces={5} />
          <Level
            name={'Upper Intermediate'}
            style={undefined}
            onPress={undefined}
            textStyle={undefined}
            source={require('../../assets/images/launch3.png')}
          />
          <Spacer.Column numberOfSpaces={5} />
          <Level
            name={'Advanced'}
            style={undefined}
            onPress={undefined}
            textStyle={undefined}
            source={require('../../assets/images/launch4.png')}
          />
        </ScrollView>
        <Button
          name={'Continue'}
          style={{
            alignSelf: 'center',
            backgroundColor: '#6B39BD',
            marginBottom: 10,
          }}
          onPress={() => navigation.navigate('SelectTopic' as never)}
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

export default LanguageLevel;
