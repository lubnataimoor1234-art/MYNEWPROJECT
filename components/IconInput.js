import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import Sizes from '../constants/Sizes';

const IconInput = ({ 
  label, 
  value, 
  onChangeText, 
  placeholder, 
  iconLibrary = 'Ionicons',
  iconName,
  editable = true,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  style = {},
  ...props 
}) => {
  const renderIcon = () => {
    const iconProps = {
      name: iconName,
      size: 20,
      color: Colors.gray3,
      style: styles.inputIcon
    };

    switch (iconLibrary) {
      case 'MaterialIcons':
        return <MaterialIcons {...iconProps} />;
      case 'FontAwesome':
        return <FontAwesome {...iconProps} />;
      case 'FontAwesome5':
        return <FontAwesome5 {...iconProps} />;
      case 'MaterialCommunityIcons':
        return <MaterialCommunityIcons {...iconProps} />;
      case 'Ionicons':
      default:
        return <Ionicons {...iconProps} />;
    }
  };

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[
        styles.inputWithIcon,
        !editable && styles.prefilledInputContainer
      ]}>
        {iconName && renderIcon()}
        <TextInput
          style={[
            styles.input,
            !editable && styles.prefilledInput
          ]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={Colors.textLight}
          editable={editable}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          {...props}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: Sizes.md,
  },
  label: {
    fontSize: Fonts.caption,
    fontFamily: Fonts.medium,
    color: Colors.text,
    marginBottom: Sizes.xs,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Sizes.borderRadiusMd,
    backgroundColor: Colors.backgroundAlt,
    paddingHorizontal: Sizes.md,
  },
  prefilledInputContainer: {
    backgroundColor: Colors.gray6,
  },
  inputIcon: {
    marginRight: Sizes.sm,
  },
  input: {
    flex: 1,
    padding: Sizes.md,
    fontSize: Fonts.body,
    fontFamily: Fonts.regular,
    color: Colors.text,
  },
  prefilledInput: {
    color: Colors.textLight,
  },
});

export default IconInput;