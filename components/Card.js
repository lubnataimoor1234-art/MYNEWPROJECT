import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';

const Card = ({ children, style = {} }) => {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.backgroundAlt,
    borderRadius: Sizes.borderRadiusLg,
    padding: Sizes.xl,
    elevation: 3,
    marginBottom: Sizes.xl,
  },
});

export default Card;