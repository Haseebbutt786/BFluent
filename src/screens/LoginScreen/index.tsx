import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {Spacer} from '../../components/Spacer';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
// import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
  const [emailData, setEmailData] = useState('');
  const [passwordData, setPasswordData] = useState('');

  const navigation = useNavigation();

  // const createUser = () => {
  //   auth()
  //     .createUserWithEmailAndPassword(emailData, passwordData)
  //     .then(() => {
  //       console.log('User account created & signed in!');
  //     })
  //     .catch(error => {
  //       if (error.code === 'auth/email-already-in-use') {
  //         console.log('That email address is already in use!');
  //       }

  //       if (error.code === 'auth/invalid-email') {
  //         console.log('That email address is invalid!');
  //       }

  //       console.error(error);
  //     });
  // };

  return (
    <View style={styles.safeareaContainer}>
      <View style={styles.mainContainer}>
        <Spacer.Column numberOfSpaces={20} />
        <Text style={styles.headerText}>Hello Again</Text>
        <Spacer.Column numberOfSpaces={5} />
        <Text style={styles.subTitle}>
          Lorem Ipsum is simply dummy text of the printing
        </Text>
        <Spacer.Column numberOfSpaces={10} />
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

        <TouchableOpacity style={styles.touchableText}>
          <Text style={styles.subTitle1}>Recover Password</Text>
        </TouchableOpacity>
        <Spacer.Column numberOfSpaces={10} />

        <Button
          name={'Sign In'}
          style={styles.buttonContainer}
          // onPress={() => createUser()}
          textStyle={styles.buttonTextContainer}
        />
        <Text style={styles.subTitle2}>Or Continue With</Text>
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
          Don't have an account?
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUpScreen' as never)}>
            <Text style={styles.subTitle4}> Sign Up</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
