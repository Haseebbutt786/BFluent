import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {HP, WP} from '../../services';
import {useNavigation} from '@react-navigation/native';
import {Spacer} from '../../components/Spacer';
import Button from '../../components/Button';
import Topic from '../../components/Topic';
import Input from '../../components/Input';

const ChatScreen = () => {
  const [isLevelSelected, setIsLevelSelected] = useState(false);

  const navigation = useNavigation();

  const handleLevelSelect = () => {
    setIsLevelSelected(prevState => !prevState);
  };

  console.log('--------->>', isLevelSelected);

  const currentDate = new Date();

  const day = currentDate.getDate(); // Get the day of the month
  const month = currentDate.toLocaleDateString('en-US', {month: 'short'}); // Get the abbreviated month name
  const time = currentDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  }); // Get the time in 12-hour format with leading zeros

  const formattedDate = `${day} ${month} - ${time}`;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#6B39BD'}}>
      <KeyboardAvoidingView
        style={{
          flex: 1,
          backgroundColor: '#6B39BD',
          justifyContent: 'flex-end',
        }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={{paddingVertical: 20}}>
          <Text style={{alignSelf: 'center', color: '#fff'}}>Travel</Text>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              paddingHorizontal: 10,
              alignItems: 'center',
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

            <View
              style={{flex: 1, alignItems: 'center', marginRight: WP('10')}}>
              <Text style={styles.headerText}>Select Level</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#EFF2F6',
            //   height: HP('100'),
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            // marginTop: HP('4'),
            //   alignItems: 'center',
            // flex: 1,
            paddingHorizontal: 20,
          }}>
          <Spacer.Column numberOfSpaces={7} />
          <Image
            style={{
              height: '45%',
              width: WP('92'),
              marginHorizontal: 10,
              borderRadius: 10,
              alignSelf: 'center',
            }}
            source={require('../../assets/images/travel1.png')}
          />
          <Spacer.Column numberOfSpaces={8} />
          <Text style={{alignSelf: 'center', color: '#000'}}>
            {formattedDate}
          </Text>
          <Spacer.Column numberOfSpaces={8} />
          <View
            style={{
              width: WP('60'),
              backgroundColor: '#6B39BD',
              borderBottomRightRadius: 15,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              paddingHorizontal: 10,
              paddingVertical: 15,
            }}>
            <Text style={{color: '#fff'}}>
              Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is
              simply dummy text of the printing{' '}
            </Text>
          </View>
          <Spacer.Column numberOfSpaces={8} />
          <Input
            children={undefined}
            PlaceHolder={'Type Message'}
            source={undefined}
            style={{
              backgroundColor: '#fff',
              paddingHorizontal: 20,
              paddingVertical: 15,
              borderRadius: 50,
            }}
            TextInputStyle={{}}
            typeOfKeyboard={undefined}
            iconStyle={undefined}
            onChangeText={undefined}
            inputValue={undefined}
            onIconPress={undefined}
            secureTextEntry={undefined}
            multiline={undefined}
            placeholderTextColor={'gray'}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;
