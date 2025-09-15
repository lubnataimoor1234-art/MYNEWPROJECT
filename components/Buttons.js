import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import Sizes from '../constants/Sizes';

const Button = ({ 
  title, 
  onPress, 
  disabled = false, 
  variant = 'primary',
  style = {},
  textStyle = {} 
}) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return disabled ? styles.primaryDisabled : styles.primary;
      case 'secondary':
        return disabled ? styles.secondaryDisabled : styles.secondary;
      default:
        return disabled ? styles.primaryDisabled : styles.primary;
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'primary':
        return styles.primaryText;
      case 'secondary':
        return styles.secondaryText;
      default:
        return styles.primaryText;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, getButtonStyle(), style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={[getTextStyle(), textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: Sizes.md,
    borderRadius: Sizes.borderRadiusMd,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  primaryDisabled: {
    backgroundColor: Colors.disabled,
  },
  secondary: {
    backgroundColor: Colors.backgroundAlt,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  secondaryDisabled: {
    backgroundColor: Colors.disabled,
    borderWidth: 1,
    borderColor: Colors.disabled,
  },
  primaryText: {
    color: Colors.textInverted,
    fontSize: Fonts.h6,
    fontFamily: Fonts.bold,
  },
  secondaryText: {
    color: Colors.primary,
    fontSize: Fonts.h6,
    fontFamily: Fonts.bold,
  },
});

export default Button;