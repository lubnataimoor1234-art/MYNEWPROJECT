import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Colors from '../../../utils/colors.utils';
import InputField from '../../../components/InputField';
import ScreenWrapper from '../../../components/ScreenWrapper';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
const SignUp = () => {
  const navigation = useNavigation<any>();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  
  const handleSignup = () => {
    navigation.navigate('SignIn');
  }

  return (
    <ScreenWrapper contentStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft size={moderateScale(22)} color={Colors.TEXT} />
        </TouchableOpacity>
        <Text style={styles.helpText}>Help</Text>
      </View>

      <Text style={styles.title}>Sign up</Text>
      <Text style={styles.subTitle}>Fill out the form to continue sign up...</Text>

      <InputField
        label="Name"
        placeholder="i.e, Johns Adam"
        value={name}
        onChangeText={setName}
      />

      <InputField
        label="Email"
        placeholder="i.e, abc@gmail.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <InputField
        label="Phone Number"
        placeholder="123-456-789"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        rightIcon={<Text style={styles.countryCode}>+1</Text>}
      />

      <InputField
        label="Password"
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!passwordVisible}
        rightIcon={
          passwordVisible ? (
            <Eye size={moderateScale(20)} color={Colors.DARK_GRAY} />
          ) : (
            <EyeOff size={moderateScale(20)} color={Colors.DARK_GRAY} />
          )
        }
        onRightIconPress={() => setPasswordVisible(!passwordVisible)}
      />

      <InputField
        label="Confirm Password"
        placeholder="Re-enter Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={!confirmPasswordVisible}
        rightIcon={
          confirmPasswordVisible ? (
            <Eye size={moderateScale(20)} color={Colors.DARK_GRAY} />
          ) : (
            <EyeOff size={moderateScale(20)} color={Colors.DARK_GRAY} />
          )
        }
        onRightIconPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
      />

      <View style={styles.passwordRules}>
        <Text style={styles.ruleText}>✔ must be over 8 characters</Text>
        <Text style={styles.ruleText}>✔ must contain 1 number</Text>
        <Text style={styles.ruleText}>✔ must contain 1 special character</Text>
      </View>

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignup}>
        <Text style={styles.signUpText}>Sign up</Text>
      </TouchableOpacity>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(30),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  helpText: {
    fontSize: moderateScale(14),
    color: Colors.DARK_GRAY,
  },
  title: {
    fontSize: moderateScale(28),
    fontWeight: '700',
    color: Colors.TEXT,
    marginTop: verticalScale(20),
  },
  subTitle: {
    fontSize: moderateScale(14),
    color: Colors.DARK_GRAY,
    marginBottom: verticalScale(20),
  },
  countryCode: {
    fontSize: moderateScale(16),
    color: Colors.TEXT,
    marginRight: moderateScale(8),
  },
  passwordRules: {
    marginBottom: verticalScale(25),
  },
  ruleText: {
    fontSize: moderateScale(13),
    color: Colors.DARK_GRAY,
    marginBottom: verticalScale(5),
  },
  signUpButton: {
    backgroundColor: Colors.PRIMARY,
    paddingVertical: verticalScale(15),
    borderRadius: moderateScale(12),
    alignItems: 'center',
  },
  signUpText: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: '#fff',
  },
});

export default SignUp;
