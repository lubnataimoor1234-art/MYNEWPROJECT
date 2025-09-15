import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform,
  TouchableOpacity,
  TextInput
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import Colors from "./constants/Colors";
import Fonts from "./constants/Fonts";
import Sizes from "./constants/Sizes";
import Strings from "./constants/Strings";
import CountryCodePicker from "./components/CountryCodePicker";
import Logo from "./components/Logo"

const LoginScreen = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState(Strings.login.countryCode);

  const handleNext = () => {
    console.log('Login with phone:', countryCode + phoneNumber);
    router.push('/ShopSetupScreen');
  };

  const handleCountryCodeSelect = (code) => {
    setCountryCode(code);
  };

  const goBack = () => {
    router.back();
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Ionicons name="arrow-back" size={24} color={Colors.text} />
        </TouchableOpacity>

        {/* Logo at the top */}
        <View style={styles.logoContainer}>
          <Logo 
            source={require("./assets/images/tailormate-logo.png")}
            size={80}
          />
        </View>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>{Strings.login.title}</Text>
        </View>

        {/* Phone Input Container */}
        <View style={styles.phoneInputContainer}>
          {/* Country Code Picker */}
          <CountryCodePicker
            selectedCode={countryCode}
            onSelect={handleCountryCodeSelect}
            style={styles.countryCodePicker}
          />
          
          {/* Phone Number Input */}
          <TextInput
            style={styles.phoneInput}
            placeholder={Strings.login.phonePlaceholder}
            placeholderTextColor={Colors.white}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            maxLength={15}
          />
        </View>

        {/* Next Button */}
        <TouchableOpacity 
          style={[styles.nextButton, !phoneNumber && styles.buttonDisabled]}
          onPress={handleNext}
          disabled={!phoneNumber}
        >
          <Text style={styles.nextButtonText}>{Strings.login.nextButton}</Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>{Strings.login.signupPrompt}</Text>
          <TouchableOpacity onPress={() => router.push('/SignupScreen')}>
            <Text style={styles.signupLink}>{Strings.login.signupLink}</Text>
          </TouchableOpacity>
        </View>
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
    paddingTop: Sizes.xxl,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: Sizes.xl,
    left: Sizes.lg,
    zIndex: 10,
    padding: Sizes.sm,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: Sizes.xl,
    marginTop: Sizes.xl,
  },
  header: {
    marginBottom: Sizes.xl,
  },
  title: {
    fontSize: Fonts.h2,
    fontFamily: Fonts.bold,
    color: Colors.text,
    textAlign: 'left',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Sizes.borderRadiusMd,
    backgroundColor: Colors.white,
    marginBottom: Sizes.xl,
    height: Sizes.inputHeight,
    overflow: 'hidden',
  },
  countryCodePicker: {
    height: '80%',
  },
  phoneInput: {
    flex: 1,
    padding: Sizes.md,
    fontSize: Fonts.body,
    color: Colors.text,
  },
  nextButton: {
    backgroundColor: Colors.primary,
    padding: Sizes.lg,
    borderRadius: Sizes.borderRadiusMd,
    alignItems: 'center',
    marginBottom: Sizes.xl,
  },
  buttonDisabled: {
    backgroundColor: Colors.disabled,
  },
  nextButtonText: {
    color: Colors.textInverted,
    fontSize: Fonts.h6,
    fontFamily: Fonts.bold,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: Sizes.xxl,
  },
  signupText: {
    color: Colors.textLight,
    fontSize: Fonts.body,
    fontFamily: Fonts.regular,
  },
  signupLink: {
    color: Colors.primary,
    fontFamily: Fonts.bold,
    fontSize: Fonts.body,
  },
});

export default LoginScreen;