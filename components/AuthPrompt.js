import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import Sizes from '../constants/Sizes';

const AuthPrompt = ({ 
  promptText, 
  linkText, 
  onPress,
  style = {} 
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.promptText}>{promptText}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.linkText}>{linkText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: Sizes.xxl,
  },
  promptText: {
    color: Colors.textLight,
    fontSize: Fonts.body,
    fontFamily: Fonts.regular,
  },
  linkText: {
    color: Colors.primary,
    fontFamily: Fonts.bold,
    fontSize: Fonts.body,
  },
});

export default AuthPrompt;