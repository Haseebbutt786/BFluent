import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {HP, WP} from '../../services';
import {useNavigation} from '@react-navigation/native';
import {Spacer} from '../../components/Spacer';
import Button from '../../components/Button';
import Topic from '../../components/Topic';

const SelectTopic = () => {
  const [isLevelSelected, setIsLevelSelected] = useState(false);

  const navigation = useNavigation();

  const handleLevelSelect = () => {
    setIsLevelSelected(prevState => !prevState);
  };

  console.log('--------->>', isLevelSelected);

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
          {/* <Spacer.Column numberOfSpaces={5} /> */}
          <Topic
            name={'About Myself'}
            style={undefined}
            onPress={() => handleLevelSelect()}
            source={require('../../assets/images/topic1.png')}
          />
          <Spacer.Column numberOfSpaces={4} />
          <Topic
            name={'Education'}
            style={undefined}
            onPress={() => handleLevelSelect()}
            source={require('../../assets/images/topic2.png')}
          />
          <Spacer.Column numberOfSpaces={4} />
          <Topic
            name={'Work'}
            style={undefined}
            onPress={() => handleLevelSelect()}
            source={require('../../assets/images/topic3.png')}
          />
          <Spacer.Column numberOfSpaces={4} />
          <Topic
            name={'Travel'}
            style={undefined}
            onPress={() => handleLevelSelect()}
            source={require('../../assets/images/topic4.png')}
          />
          <Spacer.Column numberOfSpaces={4} />
          <Topic
            name={'Fashon'}
            style={undefined}
            onPress={() => handleLevelSelect()}
            source={require('../../assets/images/topic5.png')}
          />
          <Spacer.Column numberOfSpaces={4} />
          <Topic
            name={'Sports'}
            style={undefined}
            onPress={() => handleLevelSelect()}
            source={require('../../assets/images/topic6.png')}
          />
          <Spacer.Column numberOfSpaces={4} />
          <Topic
            name={'Nature'}
            style={undefined}
            onPress={() => handleLevelSelect()}
            source={require('../../assets/images/topic7.png')}
          />
          <Spacer.Column numberOfSpaces={4} />
          <Topic
            name={'Shopping'}
            style={undefined}
            onPress={() => handleLevelSelect()}
            source={require('../../assets/images/topic8.png')}
          />
          <Spacer.Column numberOfSpaces={4} />
          <Topic
            name={'Music'}
            style={undefined}
            onPress={() => handleLevelSelect()}
            source={require('../../assets/images/topic9.png')}
          />
          <Spacer.Column numberOfSpaces={4} />
          <Topic
            name={'Medicine'}
            style={undefined}
            onPress={() => handleLevelSelect()}
            source={require('../../assets/images/topic10.png')}
          />
          <Spacer.Column numberOfSpaces={4} />

          <Topic
            name={'Food'}
            style={undefined}
            onPress={() => handleLevelSelect()}
            source={require('../../assets/images/topic11.png')}
          />
          <Spacer.Column numberOfSpaces={5} />

          <Topic
            name={'Dating'}
            style={undefined}
            onPress={() => handleLevelSelect()}
            source={require('../../assets/images/launch3.png')}
          />
        </ScrollView>
        <Button
          name={'Continue'}
          style={{
            alignSelf: 'center',
            backgroundColor: isLevelSelected ? '#6B39BD' : 'gray',
            marginBottom: 10,
            borderColor: isLevelSelected ? '#red' : 'transparent',
            borderWidth: 3,
          }}
          onPress={() => {
            isLevelSelected
              ? navigation.navigate('ChatScreen' as never)
              : Alert.alert('choose some option');
          }}
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

export default SelectTopic;
