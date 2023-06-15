import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { theme } from '../../src/ui/theme';

const Input = ({
  children,
  PlaceHolder,
  source,
  style,
  typeOfKeyboard,
  iconStyle,
  onChangeText,
  inputValue,
  onIconPress,
  secureTextEntry,
  multiline,
}) => {
  return (
    <View style={[styles.mainText, style]}>
      <TextInput
        value={inputValue}
        style={styles.input}

        // value={number}
        onChangeText={onChangeText}
        multiline={multiline}
        placeholder={PlaceHolder}
        placeholderTextColor={theme.colors.gray70}
        keyboardType={typeOfKeyboard}
        secureTextEntry={secureTextEntry}>
        {children}
      </TextInput>
      <TouchableOpacity onPress={onIconPress} style={styles.ImgText}>
        <Image style={[styles.ImgView, iconStyle]} source={source} />
      </TouchableOpacity>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    color: 'black',
    flex: 1,
    fontSize: 20
  },
  mainText: {
    flexDirection: 'row',
    borderRadius: 4,
    justifyContent: 'space-between',
  },
  ImgText: { alignItems: 'center', justifyContent: 'center' },
  ImgView: { height: 20, width: 20, marginHorizontal: 8 },
});
