import React, { useState } from 'react';
import { Platform } from 'react-native';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import Colors from './constants/Colors';
import Fonts from './constants/Fonts';
import Sizes from './constants/Sizes';
import Strings from './constants/Strings';
import Button from './components/Buttons';
import Input from './components/Input';
import Checkbox from './components/CheckBox';
import Card from './components/Card';
import AuthPrompt from './components/AuthPrompt';

const SignupScreen = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSignUp = () => {
    console.log('Sign up with:', { name, email, agreeToTerms });
    router.push('/PhoneLoginScreen');
  };

  const toggleAgreeToTerms = () => {
    setAgreeToTerms(!agreeToTerms);
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Logo at the top */}
        <View style={styles.logoContainer}>
          <Image
            source={require('./assets/images/tailormate-logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Card Container */}
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>{Strings.signup.title}</Text>

          {/* Name Input */}
          <Input
            label={Strings.signup.nameLabel}
            value={name}
            onChangeText={setName}
            placeholder={Strings.signup.namePlaceholder}
            style={styles.input}
          />
          
          {/* Email Input */}
          <Input
            label={Strings.signup.emailLabel}
            value={email}
            onChangeText={setEmail}
            placeholder={Strings.signup.emailPlaceholder}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
          
          {/* Terms Checkbox */}
          <View style={styles.termsContainer}>
            <Checkbox
              checked={agreeToTerms}
              onToggle={toggleAgreeToTerms}
              text="I agree to Terms of Service and Privacy Policy"
            />
          </View>
          
          {/* Sign Up Button */}
          <Button
            title={Strings.signup.signupButton}
            onPress={handleSignUp}
            disabled={!agreeToTerms || !name || !email}
            style={styles.signUpButton}
          />
        </Card>

        {/* Login Link */}
        <AuthPrompt
          promptText={Strings.signup.loginPrompt}
          linkText={Strings.signup.loginLink}
          onPress={() => router.push('/LoginScreen')}
          style={styles.authPrompt}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: Sizes.containerPadding,
    paddingTop: Sizes.xl,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: Sizes.xl,
  },
  logo: {
    width: 100,
    height: 100,
  },
  card: {
    padding: Sizes.xl,
    marginBottom: Sizes.xl,
  },
  cardTitle: {
    fontSize: Fonts.h1,
    fontFamily: Fonts.bold,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: Sizes.xl,
  },
  input: {
    marginBottom: Sizes.lg,
  },
  termsContainer: {
    marginBottom: Sizes.xl,
    marginTop: Sizes.sm,
  },
  signUpButton: {
    marginTop: Sizes.md,
  },
  authPrompt: {
    marginTop: Sizes.xl,
  },
});

export default SignupScreen;