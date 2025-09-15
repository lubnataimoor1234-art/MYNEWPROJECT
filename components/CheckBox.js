import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import Sizes from '../constants/Sizes';

const Checkbox = ({ 
  checked = false, 
  onToggle, 
  text,
  style = {} 
}) => {
  return (
    <TouchableOpacity 
      style={[styles.container, style]}
      onPress={onToggle}
      activeOpacity={0.7}
    >
      <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
        {checked && <Ionicons name="checkmark" size={16} color={Colors.textInverted} />}
      </View>
      {text && (
        <Text style={styles.text}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: Colors.textLight,
    borderRadius: 4,
    marginRight: Sizes.md,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  text: {
    color: Colors.text,
    fontSize: Fonts.body,
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default Checkbox;