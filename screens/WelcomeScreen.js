import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; 
import WelcomeColors from './constants/WelcomeColors';
import Fonts from './constants/Fonts';
import Sizes from './constants/Sizes';
import Strings from './constants/Strings';

const { width } = Dimensions.get('window'); 

const WelcomeScreen = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: Strings.welcome.title1,
      description: Strings.welcome.description1,
      image: require('./assets/images/welcome-1.jpg') 
    },
    {
      id: 2,
      title: Strings.welcome.title2,
      description: Strings.welcome.description2,
      image: require('./assets/images/welcome-2.jpg') 
    },
    {
      id: 3,
      title: Strings.welcome.title3,
      description: Strings.welcome.description3,
      image: require('./assets/images/welcome-3.jpg') 
    }
  ];

  const goToSignup = () => {
    router.push('/SignupScreen');
  };

  const goToLogin = () => {
    router.push('/LoginScreen');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => {
          const slideIndex = Math.round(e.nativeEvent.contentOffset.x / width); 
          setCurrentSlide(slideIndex);
        }}
        scrollEventThrottle={16}
      >
        {slides.map((slide) => (
          <View key={slide.id} style={styles.slide}>
            <Text style={styles.title}>{slide.title}</Text>
            <Text style={styles.description}>{slide.description}</Text>
            <Image source={slide.image} style={styles.image} />
          </View>
        ))}
      </ScrollView>

      {/* Indicators */}
      <View style={styles.indicatorContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSlide === index && styles.activeIndicator
            ]}
          />
        ))}
      </View>

      {/* Get Started Button - Always visible */}
      <TouchableOpacity style={styles.button} onPress={goToSignup}>
        <Text style={styles.buttonText}>Let's Get Started</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>{Strings.welcome.loginPrompt}</Text>
        <TouchableOpacity onPress={goToLogin}>
          <Text style={styles.loginLink}>{Strings.welcome.loginLink}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WelcomeColors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Sizes.containerPadding,
  },
  slide: {
    width: width - Sizes.containerPadding * 2, 
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Sizes.md,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'center',
    marginBottom: Sizes.xl,
  },
  title: {
    fontSize: Fonts.h3,
    fontFamily: Fonts.bold,
    color: WelcomeColors.text,
    textAlign: 'center',
    marginBottom: Sizes.md,
  },
  description: {
    fontSize: Fonts.body,
    fontFamily: Fonts.regular,
    color: WelcomeColors.textLight,
    textAlign: 'center',
    lineHeight: Fonts.lineHeightRegular * Fonts.body,
    paddingHorizontal: Sizes.sm,
    marginBottom: Sizes.xl,
  },
  indicatorContainer: {
    flexDirection: 'row',
    marginBottom: Sizes.xl,
  },
  indicator: {
    width: Sizes.xs * 2,
    height: Sizes.xs * 2,
    borderRadius: Sizes.xs,
    backgroundColor: WelcomeColors.indicator,
    marginHorizontal: Sizes.xs,
  },
  activeIndicator: {
    backgroundColor: WelcomeColors.activeIndicator,
    width: Sizes.lg,
  },
  button: {
    backgroundColor: WelcomeColors.primary,
    flexDirection: 'row', 
    alignItems: 'center', // Add this to center vertically
    justifyContent: 'center', // Add this to center horizontally
    paddingVertical: Sizes.md,
    paddingHorizontal: Sizes.xl,
    borderRadius: Sizes.borderRadiusRound,
    marginBottom: Sizes.lg,
    width: '100%',
  },
  buttonText: {
    color: WelcomeColors.textInverted,
    fontSize: Fonts.h6,
    fontFamily: Fonts.bold,
    marginRight: 5, // Add spacing between text and icon
  },
  loginContainer: {
    flexDirection: 'row',
    marginBottom: Sizes.xxl,
  },
  loginText: {
    color: WelcomeColors.textLight,
    fontFamily: Fonts.regular,
    fontSize: Fonts.body,
  },
  loginLink: {
    color: WelcomeColors.primary,
    fontFamily: Fonts.bold,
    fontSize: Fonts.body,
  },
});

export default WelcomeScreen;