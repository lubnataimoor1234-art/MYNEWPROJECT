import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import Sizes from '../constants/Sizes';

const ContactInfo = ({ formData, handleInputChange, focusedField, setFocusedField, userData }) => {
  // Get phone and email from userData (passed from parent component)
  const userPhone = userData?.phone || '';
  const userEmail = userData?.email || '';

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Contact Information</Text>
      
      {/* Phone - Pre-filled with user's phone number */}
      <View style={styles.contactField}>
        <View style={[styles.iconContainer, styles.phoneIcon]}>
          <Ionicons name="call" size={20} color={Colors.white} />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.contactText}>{userPhone || 'No phone number available'}</Text>
        </View>
      </View>

      {/* Email - Pre-filled with user's email address */}
      <View style={styles.contactField}>
        <View style={[styles.iconContainer, styles.emailIcon]}>
          <Ionicons name="mail" size={20} color={Colors.white} />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.contactText}>{userEmail || 'No email address available'}</Text>
        </View>
      </View>

      {/* Website Url with colored icon and input box */}
      <View style={styles.contactField}>
        <View style={[styles.iconContainer, styles.websiteIcon]}>
          <Ionicons name="globe" size={20} color={Colors.white} />
        </View>
        <View style={[styles.inputBox, focusedField === 'websiteUrl' && styles.inputFocused]}>
          <TextInput
            style={styles.input}
            value={formData.websiteUrl}
            onChangeText={(text) => handleInputChange('websiteUrl', text)}
            placeholder="Website Url"
            placeholderTextColor={Colors.textLight}
            onFocus={() => setFocusedField('websiteUrl')}
            onBlur={() => setFocusedField(null)}
          />
        </View>
      </View>

      {/* Instagram Id with colored icon and input box */}
      <View style={styles.contactField}>
        <View style={[styles.iconContainer, styles.instagramIcon]}>
          <FontAwesome5 name="instagram" size={20} color={Colors.white} />
        </View>
        <View style={[styles.inputBox, focusedField === 'instagramId' && styles.inputFocused]}>
          <TextInput
            style={styles.input}
            value={formData.instagramId}
            onChangeText={(text) => handleInputChange('instagramId', text)}
            placeholder="Instagram ID"
            placeholderTextColor={Colors.textLight}
            onFocus={() => setFocusedField('instagramId')}
            onBlur={() => setFocusedField(null)}
          />
        </View>
      </View>

      {/* WhatsApp Number with colored icon and input box */}
      <View style={styles.contactField}>
        <View style={[styles.iconContainer, styles.whatsappIcon]}>
          <FontAwesome5 name="whatsapp" size={20} color={Colors.white} />
        </View>
        <View style={[styles.inputBox, focusedField === 'whatsappNumber' && styles.inputFocused]}>
          <TextInput
            style={styles.input}
            value={formData.whatsappNumber}
            onChangeText={(text) => handleInputChange('whatsappNumber', text)}
            placeholder="WhatsApp Number"
            placeholderTextColor={Colors.textLight}
            keyboardType="phone-pad"
            onFocus={() => setFocusedField('whatsappNumber')}
            onBlur={() => setFocusedField(null)}
          />
        </View>
      </View>

      {/* Facebook Id with colored icon and input box */}
      <View style={styles.contactField}>
        <View style={[styles.iconContainer, styles.facebookIcon]}>
          <FontAwesome5 name="facebook" size={20} color={Colors.white} />
        </View>
        <View style={[styles.inputBox, focusedField === 'facebookId' && styles.inputFocused]}>
          <TextInput
            style={styles.input}
            value={formData.facebookId}
            onChangeText={(text) => handleInputChange('facebookId', text)}
            placeholder="Facebook ID"
            placeholderTextColor={Colors.textLight}
            onFocus={() => setFocusedField('facebookId')}
            onBlur={() => setFocusedField(null)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: Sizes.xl,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: Fonts.bold,
    color: Colors.text,
    marginBottom: 16,
    paddingLeft: 4,
  },
  contactField: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  inputBox: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  inputFocused: {
    borderColor: Colors.primary,
    borderWidth: 2,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: Colors.text,
    padding: 0,
    margin: 0,
    height: '100%',
  },
  contactText: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: Colors.text,
  },
  // Icon-specific background colors
  phoneIcon: {
    backgroundColor: '#4CAF50', // Green for phone
  },
  emailIcon: {
    backgroundColor: '#FF5722', // Orange for email
  },
  websiteIcon: {
    backgroundColor: '#f0f2f5ff', // Blue for website
  },
  instagramIcon: {
    backgroundColor: '#E4405F', // Instagram pink
  },
  whatsappIcon: {
    backgroundColor: '#25D366', // WhatsApp green
  },
  facebookIcon: {
    backgroundColor: '#1877F2', // Facebook blue
  },
});

export default ContactInfo;