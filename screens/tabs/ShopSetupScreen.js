import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Colors from './constants/Colors';
import Fonts from './constants/Fonts';
import Sizes from './constants/Sizes';
import Button from './components/Buttons';
import ContactInfo from './components/ContactInfo';
import SetupShopHeader from './components/SetupShopHeader'; 

const ShopSetupScreen = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    shopName: '',
    shopCode: '',
    shopType: '',
    stitchingFor: '',
    websiteUrl: '',
    instagramId: '',
    whatsappNumber: '',
    facebookId: '',
  });
  
  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleSave = () => {
    console.log('Shop setup data:', formData);
    router.push('/ShopSetupStep2');
  };

  const isFormValid = () => {
    return formData.shopName && formData.shopCode && formData.shopType && formData.stitchingFor;
  };

  // Enhanced Radio Button Component
  const RadioButton = ({ label, selected, onPress }) => (
    <TouchableOpacity 
      style={[styles.radioOption, selected && styles.radioOptionSelected]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={[styles.radioCircle, selected && styles.radioCircleSelected]}>
        {selected && <View style={styles.radioSelected} />}
      </View>
      <Text style={[styles.radioLabel, selected && styles.radioLabelSelected]}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Use SetupShopHeader component */}
      <SetupShopHeader currentStep={1} totalSteps={2} />

      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Form */}
        <View style={styles.form}>
          
          {/* Shop Name with Input Box */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Shop Name</Text>
            <View style={[styles.inputBox, focusedField === 'shopName' && styles.inputFocused]}>
              <TextInput
                style={styles.input}
                value={formData.shopName}
                onChangeText={(text) => handleInputChange('shopName', text)}
                placeholder="Enter your shop name"
                placeholderTextColor={Colors.textLight}
                onFocus={() => setFocusedField('shopName')}
                onBlur={() => setFocusedField(null)}
              />
            </View>
          </View>

          {/* Shop Code with Input Box */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Shop Code</Text>
            <View style={[styles.inputBox, focusedField === 'shopCode' && styles.inputFocused]}>
              <TextInput
                style={styles.input}
                value={formData.shopCode}
                onChangeText={(text) => handleInputChange('shopCode', text)}
                placeholder="Enter shop code"
                placeholderTextColor={Colors.textLight}
                onFocus={() => setFocusedField('shopCode')}
                onBlur={() => setFocusedField(null)}
              />
            </View>
          </View>

          {/* Shop Type */}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>Shop Type</Text>
            <View style={styles.radioGroup}>
              <RadioButton
                label="Outlet"
                selected={formData.shopType === 'Outlet'}
                onPress={() => handleInputChange('shopType', 'Outlet')}
              />
              <RadioButton
                label="Workshop"
                selected={formData.shopType === 'Workshop'}
                onPress={() => handleInputChange('shopType', 'Workshop')}
              />
              <RadioButton
                label="Both"
                selected={formData.shopType === 'Both'}
                onPress={() => handleInputChange('shopType', 'Both')}
              />
            </View>
          </View>

          {/* Stitching For */}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>Stitching done for</Text>
            <View style={styles.radioGroup}>
              <RadioButton
                label="Gents"
                selected={formData.stitchingFor === 'Gents'}
                onPress={() => handleInputChange('stitchingFor', 'Gents')}
              />
              <RadioButton
                label="Ladies"
                selected={formData.stitchingFor === 'Ladies'}
                onPress={() => handleInputChange('stitchingFor', 'Ladies')}
              />
              <RadioButton
                label="Both"
                selected={formData.stitchingFor === 'Both'}
                onPress={() => handleInputChange('stitchingFor', 'Both')}
              />
            </View>
          </View>

          {/* Contact Information */}
          <ContactInfo 
            formData={formData}
            handleInputChange={handleInputChange}
            focusedField={focusedField}
            setFocusedField={setFocusedField}
          />

          {/* Save Button */}
          <Button
            title="Save & Continue"
            onPress={handleSave}
            disabled={!isFormValid()}
            style={styles.saveButton}
          />
        </View>
      </ScrollView>
    </View>
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
  },
  form: {
    flex: 1,
  },
  section: {
    marginBottom: Sizes.xl,
  },
  sectionLabel: {
    fontSize: Fonts.h5,
    fontFamily: Fonts.semiBold,
    color: Colors.text,
    marginBottom: Sizes.md,
  },
  inputContainer: {
    marginBottom: Sizes.lg,
  },
  inputLabel: {
    fontSize: Fonts.h5,
    fontFamily: Fonts.semiBold,
    color: Colors.text,
    marginBottom: Sizes.sm,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    paddingHorizontal: Sizes.md,
    paddingVertical: Sizes.sm,
    backgroundColor: Colors.background,
  },
  inputFocused: {
    borderColor: Colors.primary,
    borderWidth: 2,
  },
  input: {
    fontSize: Fonts.body,
    fontFamily: Fonts.regular,
    color: Colors.text,
    padding: 0,
    margin: 0,
    height: 24,
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Sizes.xs,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Sizes.sm,
    borderRadius: Sizes.borderRadiusMd,
    marginHorizontal: 2,
    flex: 1,
    justifyContent: 'center',
  },
  radioOptionSelected: {
    backgroundColor: Colors.primaryLight + '20', // 20% opacity
  },
  radioCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Sizes.sm,
  },
  radioCircleSelected: {
    borderColor: Colors.primary,
  },
  radioSelected: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.primary,
  },
  radioLabel: {
    fontSize: Fonts.body,
    fontFamily: Fonts.regular,
    color: Colors.text,
  },
  radioLabelSelected: {
    color: Colors.primary,
    fontFamily: Fonts.medium,
  },
  saveButton: {
    marginTop: Sizes.xl,
    marginBottom: Sizes.xxl,
  },
});

export default ShopSetupScreen;