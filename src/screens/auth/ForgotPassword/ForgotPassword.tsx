import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../../../utils/Colors.utils';
import InputField from '../../../components/InputField';
import ScreenWrapper from '../../../components/ScreenWrapper';
import { ArrowLeft } from 'lucide-react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import CustomHeader from '../../../components/MainHeader';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  return (
    <ScreenWrapper contentStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft size={moderateScale(22)} color={Colors.TEXT} />
        </TouchableOpacity>
        <Text style={styles.helpText}>Help</Text>
      </View>

      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subTitle}>
        Enter your email address to reset your password
      </Text>

      <InputField
        label="Email"
        placeholder="Enter your email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Button */}
      <TouchableOpacity style={styles.resetButton}>
        <Text style={styles.resetText}>Send Reset Link</Text>
      </TouchableOpacity>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(20),
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
    fontSize: moderateScale(26),
    fontWeight: '700',
    color: Colors.TEXT,
    marginTop: verticalScale(20),
  },
  subTitle: {
    fontSize: moderateScale(14),
    color: Colors.DARK_GRAY,
    marginBottom: verticalScale(20),
  },
  resetButton: {
    backgroundColor: Colors.PRIMARY,
    paddingVertical: verticalScale(15),
    borderRadius: moderateScale(12),
    alignItems: 'center',
    marginTop: verticalScale(30),
  },
  resetText: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: '#fff',
  },
});

export default ForgotPassword;
