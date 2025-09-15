import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Sizes from '../constants/Sizes';

const Logo = ({ 
  source, 
  size = 80, 
  resizeMode = "contain", 
  style = {} 
}) => {
  return (
    <View style={[styles.logoContainer, style]}>
      <Image
        source={source}
        style={[styles.logo, { width: size, height: size }]}
        resizeMode={resizeMode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginBottom: Sizes.lg,
  },
  logo: {
    resizeMode: 'contain',
  },
});

export default Logo;