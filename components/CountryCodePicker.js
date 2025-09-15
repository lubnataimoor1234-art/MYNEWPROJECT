// components/CountryCodePicker.js
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Modal, 
  FlatList, 
  StyleSheet, 
  TextInput 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import Sizes from '../constants/Sizes';

const countryData = [
  { code: '+1', flag: '🇺🇸', name: 'United States' },
  { code: '+44', flag: '🇬🇧', name: 'United Kingdom' },
  { code: '+91', flag: '🇮🇳', name: 'India' },
  { code: '+92', flag: '🇵🇰', name: 'Pakistan' },
  { code: '+86', flag: '🇨🇳', name: 'China' },
  { code: '+81', flag: '🇯🇵', name: 'Japan' },
  { code: '+49', flag: '🇩🇪', name: 'Germany' },
  { code: '+33', flag: '🇫🇷', name: 'France' },
  { code: '+971', flag: '🇦🇪', name: 'UAE' },
  { code: '+966', flag: '🇸🇦', name: 'Saudi Arabia' },
];

const CountryCodePicker = ({ selectedCode, onSelect, style = {} }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const selectedCountry = countryData.find(country => country.code === selectedCode) || countryData[4]; // Default to India

  const filteredCountries = countryData.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    country.code.includes(searchQuery)
  );

  const handleSelect = (code) => {
    onSelect(code);
    setModalVisible(false);
    setSearchQuery('');
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={styles.countryCodeContainer}
        onPress={() => setModalVisible(true)}
        activeOpacity={0.7}
      >
        <Text style={styles.flagText}>{selectedCountry.flag}</Text>
        <Text style={styles.countryCodeText}>{selectedCountry.code}</Text>
        <Ionicons name="chevron-down" size={16} color={Colors.text} />
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Country</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={24} color={Colors.text} />
              </TouchableOpacity>
            </View>

            <View style={styles.searchContainer}>
              <Ionicons name="search" size={20} color={Colors.textLight} style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search country..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholderTextColor={Colors.textLight}
              />
            </View>

            <FlatList
              data={filteredCountries}
              keyExtractor={(item) => item.code}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.countryItem}
                  onPress={() => handleSelect(item.code)}
                  activeOpacity={0.7}
                >
                  <Text style={styles.flagText}>{item.flag}</Text>
                  <View style={styles.countryInfo}>
                    <Text style={styles.countryName}>{item.name}</Text>
                    <Text style={styles.countryCode}>{item.code}</Text>
                  </View>
                  {selectedCode === item.code && (
                    <Ionicons name="checkmark" size={20} color={Colors.primary} />
                  )}
                </TouchableOpacity>
              )}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
  },
  countryCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Sizes.md,
    paddingVertical: Sizes.sm,
    borderRightWidth: 1,
    borderRightColor: Colors.border,
    height: '100%',
    backgroundColor: '#FFFFFF', 
    minWidth: 80,
  },
  flagText: {
    fontSize: 20,
    marginRight: Sizes.xs,
  },
  countryCodeText: {
    fontSize: Fonts.body,
    color: Colors.text,
    marginRight: Sizes.xs,
    fontFamily: Fonts.medium,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFFFFF', 
    borderRadius: Sizes.borderRadiusLg,
    width: '90%',
    maxHeight: '80%',
    padding: Sizes.md,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Sizes.md,
  },
  modalTitle: {
    fontSize: Fonts.h5,
    fontFamily: Fonts.bold,
    color: Colors.text,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Sizes.borderRadiusMd,
    paddingHorizontal: Sizes.md,
    marginBottom: Sizes.md,
    backgroundColor: '#FFFFFF', 
  },
  searchIcon: {
    marginRight: Sizes.sm,
  },
  searchInput: {
    flex: 1,
    padding: Sizes.md,
    fontSize: Fonts.body,
    color: Colors.text,
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Sizes.md,
    borderRadius: Sizes.borderRadiusMd,
    backgroundColor: '#FFFFFF',
  },
  countryInfo: {
    flex: 1,
    marginLeft: Sizes.md,
  },
  countryName: {
    fontSize: Fonts.body,
    fontFamily: Fonts.medium,
    color: Colors.text,
    marginBottom: 2,
  },
  countryCode: {
    fontSize: Fonts.caption,
    color: Colors.textLight,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.border,
    marginHorizontal: Sizes.md,
  },
});

export default CountryCodePicker;