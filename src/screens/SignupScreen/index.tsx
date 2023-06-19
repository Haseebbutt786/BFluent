import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {Spacer} from '../../components/Spacer';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const SignUpScreen = () => {
  const [emailData, setEmailData] = useState('');
  const [passwordData, setPasswordData] = useState('');
  const [userName, setUserName] = useState('');

  const navigation = useNavigation();

  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(emailData, passwordData)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <View style={styles.mainContainer}>
        <Spacer.Column numberOfSpaces={20} />
        <Text style={styles.headerText}>Sign Up</Text>
        <Spacer.Column numberOfSpaces={10} />
        <Input
          children={undefined}
          PlaceHolder={'Full Name'}
          source={undefined}
          style={styles.inputField}
          typeOfKeyboard={undefined}
          iconStyle={undefined}
          onChangeText={(text: any) => setUserName(text)}
          inputValue={userName}
          onIconPress={undefined}
          secureTextEntry={undefined}
          multiline={undefined}
        />
        <Spacer.Column numberOfSpaces={4} />
        <Input
          children={undefined}
          PlaceHolder={'Email'}
          source={undefined}
          style={styles.inputField}
          typeOfKeyboard={undefined}
          iconStyle={undefined}
          onChangeText={(text: any) => setEmailData(text)}
          inputValue={emailData}
          onIconPress={undefined}
          secureTextEntry={undefined}
          multiline={undefined}
        />
        <Spacer.Column numberOfSpaces={4} />
        <Input
          children={undefined}
          PlaceHolder={'Password'}
          source={undefined}
          style={styles.inputField}
          typeOfKeyboard={undefined}
          iconStyle={undefined}
          onChangeText={(text: any) => setPasswordData(text)}
          inputValue={passwordData}
          onIconPress={undefined}
          secureTextEntry={undefined}
          multiline={undefined}
        />

        <Text style={styles.subTitle3}>
          I agree with the
          <TouchableOpacity onPress={() => navigation.navigate('' as never)}>
            <Text style={styles.subTitle4}> privacy policy</Text>
          </TouchableOpacity>
        </Text>
        <Spacer.Column numberOfSpaces={5} />

        <Button
          name={'Sign Up'}
          style={styles.buttonContainer}
          onPress={() => createUser()}
          textStyle={styles.buttonTextContainer}
        />
        <Text style={styles.subTitle2}>Or Sign Up With</Text>
        <Spacer.Column numberOfSpaces={5} />

        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.subContainer}>
            <Image
              style={styles.imageStyle}
              source={require('../../assets/images/google.png')}
            />
          </TouchableOpacity>
          <Spacer.Row numberOfSpaces={8} />

          <TouchableOpacity style={styles.imageContainer}>
            <Image
              style={styles.imageStyle}
              source={require('../../assets/images/facebook.png')}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.subTitle3}>
          Have an account?
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen' as never)}>
            <Text style={styles.subTitle4}> Sign In</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
