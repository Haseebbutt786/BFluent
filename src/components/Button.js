import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { WP } from '../services';

const Button = ({ name, style, onPress, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.main, style]} onPress={onPress}>
      <Text style={[styles.textContainer, textStyle]}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#FFf',
    borderRadius: 20,
    justifyContent: 'center',
    width: "95%",
    paddingHorizontal: 30
  },
  textContainer: {
    color: 'gray',
    fontSize: 20,
    fontWeight: '300',
    paddingVertical: 20,

  },
});
