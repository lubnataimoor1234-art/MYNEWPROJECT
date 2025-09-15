import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

const SetupShopHeader = ({ currentStep = 2, totalSteps = 2 }) => {
  return (
    <View style={styles.container}>
      {/* Black top section */}
      <View style={styles.topSection}>
        <Text style={styles.mainTitle}>Set up your Shop</Text>
      </View>
      
      {/* White triangle pointing from step to title */}
      <View style={styles.triangle} />
      
      {/* White middle section with step indicator */}
      <View style={styles.middleSection}>
        <Text style={styles.stepText}>Step {currentStep} of {totalSteps}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  topSection: {
    backgroundColor: Colors.primary, 
    paddingVertical: 38, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    color: 'white',
    fontSize: 24, 
    fontFamily: Fonts.bold || 'Roboto-Bold',
    fontWeight: 'bold',
  },
  middleSection: {
    backgroundColor: 'white',
    paddingVertical: 18, 
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    position: 'relative',
  },
  stepText: {
    color: '#424242',
    fontSize: 18,
    fontFamily: Fonts.medium || 'Roboto-Medium',
    fontWeight: '600',
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 20,  
    borderRightWidth: 20,
    borderBottomWidth: 20, 
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
    alignSelf: 'center',
    position: 'absolute',
    top: 85, // Position adjust
    zIndex: 1,
  },
});

export default SetupShopHeader;