import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Modal,FlatList, Alert, KeyboardAvoidingView, Platform, Image, Dimensions, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import IconInput from '../components/IconInput';
import Button from '../components/Buttons';
import Colors from './constants/Colors';
import Fonts from './constants/Fonts';
import { countries, mockLocations } from '../components/mockData';
import SetupShopHeader from '../components/SetupShopHeader';

const { width, height } = Dimensions.get('window');

const ShopSetupScreen = () => {
  const [shopName, setShopName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('Pakistan');
  const [postalCode, setPostalCode] = useState('');
  const [shopLogo, setShopLogo] = useState(null);
  const [shopPhoto, setShopPhoto] = useState(null);
  const [isCountryModalVisible, setIsCountryModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isMapModalVisible, setIsMapModalVisible] = useState(false);
  const [mapSearchQuery, setMapSearchQuery] = useState('');
  
  // Map state
  const [region, setRegion] = useState({
    latitude: 30.3753, // Default to Pakistan coordinates
    longitude: 69.3451,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const mapRef = useRef(null);

  // Initialize with first country's coordinates if available
  useEffect(() => {
    if (countries && countries.length > 0 && countries[0].coordinates) {
      setRegion({
        latitude: countries[0].coordinates.latitude,
        longitude: countries[0].coordinates.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  }, []);

  const handleSaveDetails = () => {
    if (!shopName || !address || !city || !postalCode || !selectedLocation) {
      Alert.alert("Missing Information", "Please fill in all required fields and select a location");
      return;
    }
    
    console.log('Saving shop setup details...', {
      shopName,
      address,
      city,
      country,
      postalCode,
      location: selectedLocation,
    });
    
    Alert.alert("Success", "Shop details saved successfully!");
  };

  const handleCountrySelect = (selectedCountry) => {
    setCountry(selectedCountry.name);
    
    // Update map region when country is selected
    if (selectedCountry.coordinates) {
      const newRegion = {
        latitude: selectedCountry.coordinates.latitude,
        longitude: selectedCountry.coordinates.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
      setRegion(newRegion);
      setSelectedLocation(null); // Reset selected location when country changes
      
      if (mapRef.current) {
        mapRef.current.animateToRegion(newRegion, 1000);
      }
    }
    
    setIsCountryModalVisible(false);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setIsMapModalVisible(false);
    
    // Update map to show the selected location
    if (location.coordinates) {
      const newRegion = {
        latitude: location.coordinates.latitude,
        longitude: location.coordinates.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
      
      if (mapRef.current) {
        mapRef.current.animateToRegion(newRegion, 1000);
      }
    }
  };

  const openMapModal = () => {
    setIsMapModalVisible(true);
  };

  const filteredLocations = mockLocations.filter(location =>
    location.name.toLowerCase().includes(mapSearchQuery.toLowerCase()) ||
    location.address.toLowerCase().includes(mapSearchQuery.toLowerCase())
  );

  const renderCountryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.countryItem}
      onPress={() => handleCountrySelect(item)}
    >
      <Text style={styles.countryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderLocationItem = ({ item }) => (
    <TouchableOpacity
      style={styles.locationItem}
      onPress={() => handleLocationSelect(item)}
    >
      <View style={styles.locationItemContent}>
        <Text style={styles.locationItemName}>{item.name}</Text>
        <Text style={styles.locationItemAddress}>{item.address}</Text>
        <Text style={styles.locationItemType}>{item.type}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Setup Shop Header */}
      <SetupShopHeader currentStep={2} totalSteps={2} />
      
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
          <View style={styles.formContainer}>
            {/* Shop Location Name Section */}
            <View style={styles.section}>
              <IconInput
                value={shopName}
                onChangeText={setShopName}
                placeholder="Enter shop location name"
                style={styles.inputField}
              />
            </View>

            {/* Shop Address Section */}
            <View style={styles.section}>
              <IconInput
                value={address}
                onChangeText={setAddress}
                placeholder="Enter shop address"
                style={styles.inputField}
              />
            </View>

            {/* City Section */}
            <View style={styles.section}>
              <IconInput
                value={city}
                onChangeText={setCity}
                placeholder="Enter city"
                style={styles.inputField}
              />
            </View>

            {/* Country Section */}
            <View style={styles.section}>
              <TouchableOpacity 
                style={styles.countrySelector}
                onPress={() => setIsCountryModalVisible(true)}
              >
                <Text style={styles.countryText}>{country}</Text>
                <Ionicons name="chevron-down" size={16} color={Colors.text} />
              </TouchableOpacity>
            </View>

            {/* Postal Code Section */}
            <View style={styles.section}>
              <IconInput
                value={postalCode}
                onChangeText={setPostalCode}
                placeholder="Enter postal code"
                keyboardType="numeric"
                style={styles.inputField}
              />
            </View>

            {/* Map Input Section - Click to show map */}
            <View style={styles.section}>
              <Text style={styles.inputLabel}>Shop Location</Text>
              <TouchableOpacity 
                style={styles.mapInput}
                onPress={openMapModal}
              >
                <Text style={selectedLocation ? styles.mapInputText : styles.mapInputPlaceholder}>
                  {selectedLocation ? selectedLocation.name : "Select a shop location"}
                </Text>
                <Ionicons name="map" size={20} color={Colors.primary} />
              </TouchableOpacity>
            </View>

            {/* Image Uploads Section */}
            <View style={styles.section}>
              <View style={styles.imageRow}>
                <View style={styles.imageUploadContainer}>
                  <Text style={styles.imageLabel}>Shop Logo</Text>
                  <TouchableOpacity 
                    style={styles.imageUploadBox}
                    onPress={() => console.log('Add shop logo')}
                  >
                    {shopLogo ? (
                      <Image source={{ uri: shopLogo }} style={styles.uploadedImage} />
                    ) : (
                      <View style={styles.uploadPlaceholder}>
                        <Ionicons name="camera" size={24} color={Colors.textLight} />
                        <Text style={styles.uploadText}>Add Logo</Text>
                      </View>
                    )}
                    <View style={styles.plusIcon}>
                      <Ionicons name="add" size={20} color="#fff" />
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={styles.imageUploadContainer}>
                  <Text style={styles.imageLabel}>Shop Photo</Text>
                  <TouchableOpacity 
                    style={styles.imageUploadBox}
                    onPress={() => console.log('Add shop photo')}
                  >
                    {shopPhoto ? (
                      <Image source={{ uri: shopPhoto }} style={styles.uploadedImage} />
                    ) : (
                      <View style={styles.uploadPlaceholder}>
                        <Ionicons name="camera" size={24} color={Colors.textLight} />
                        <Text style={styles.uploadText}>Add Photo</Text>
                      </View>
                    )}
                    <View style={styles.plusIcon}>
                      <Ionicons name="add" size={20} color="#fff" />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Save Button */}
        <View style={styles.buttonContainer}>
          <Button
            title="Save Details"
            onPress={handleSaveDetails}
            variant="primary"
            style={styles.saveButton}
            textStyle={styles.saveButtonText}
          />
        </View>
      </View>

      {/* Country Selection Modal */}
      <Modal
        visible={isCountryModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsCountryModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Country</Text>
              <TouchableOpacity onPress={() => setIsCountryModalVisible(false)}>
                <Ionicons name="close" size={24} color={Colors.text} />
              </TouchableOpacity>
            </View>
            <FlatList
              data={countries}
              keyExtractor={(item) => item.id}
              renderItem={renderCountryItem}
            />
          </View>
        </View>
      </Modal>

      {/* Map Location Selection Modal */}
      <Modal
        visible={isMapModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsMapModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent, styles.mapModalContent]}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Shop Location</Text>
              <TouchableOpacity onPress={() => setIsMapModalVisible(false)}>
                <Ionicons name="close" size={24} color={Colors.text} />
              </TouchableOpacity>
            </View>
            
            {/* Search Box */}
            <View style={styles.searchContainer}>
              <Ionicons name="search" size={20} color={Colors.textLight} style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search locations..."
                value={mapSearchQuery}
                onChangeText={setMapSearchQuery}
              />
            </View>
            
            <FlatList
              data={filteredLocations}
              keyExtractor={(item) => item.id}
              renderItem={renderLocationItem}
              ListEmptyComponent={
                <View style={styles.emptyState}>
                  <Ionicons name="location" size={40} color={Colors.textLight} />
                  <Text style={styles.emptyStateText}>No locations found</Text>
                </View>
              }
            />
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: Fonts.medium,
    color: Colors.text,
    marginBottom: 8,
  },
  inputField: {
    marginBottom: 0,
  },
  countrySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    backgroundColor: Colors.backgroundAlt,
    paddingHorizontal: 16,
    paddingVertical: 14,
    height: 50,
  },
  countryText: {
    fontSize: 16,
    color: Colors.text,
    fontFamily: Fonts.regular,
  },
  mapInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    backgroundColor: Colors.backgroundAlt,
    paddingHorizontal: 16,
    paddingVertical: 14,
    height: 50,
  },
  mapInputText: {
    fontSize: 16,
    color: Colors.text,
    fontFamily: Fonts.regular,
  },
  mapInputPlaceholder: {
    fontSize: 16,
    color: Colors.textLight,
    fontFamily: Fonts.regular,
  },
  mapLabel: {
    fontSize: 14,
    fontFamily: Fonts.medium,
    color: Colors.text,
    marginBottom: 8,
  },
  mapContainer: {
    height: 200,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  imageUploadContainer: {
    flex: 1,
  },
  imageLabel: {
    fontSize: 14,
    fontFamily: Fonts.medium,
    color: Colors.text,
    marginBottom: 8,
  },
  imageUploadBox: {
    height: 120,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.backgroundAlt,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  uploadPlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadText: {
    fontSize: 12,
    color: Colors.textLight,
    marginTop: 8,
    fontFamily: Fonts.regular,
  },
  uploadedImage: {
    width: '100%',
    height: '100%',
  },
  plusIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    backgroundColor: Colors.background,
  },
  saveButton: {
    width: '100%',
    borderRadius: 10,
    paddingVertical: 16,
    backgroundColor: Colors.primary,
  },
  saveButtonText: {
    fontSize: 16,
    fontFamily: Fonts.bold,
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: Colors.background,
    borderRadius: 12,
    padding: 20,
    maxHeight: '70%',
  },
  mapModalContent: {
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: Fonts.bold,
    color: Colors.text,
  },
  countryItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: Colors.backgroundAlt,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontFamily: Fonts.regular,
    color: Colors.text,
  },
  locationItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  locationItemContent: {
    flex: 1,
  },
  locationItemName: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    color: Colors.text,
    marginBottom: 4,
  },
  locationItemAddress: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.text,
    marginBottom: 4,
  },
  locationItemType: {
    fontSize: 12,
    fontFamily: Fonts.regular,
    color: Colors.textLight,
    textTransform: 'capitalize',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  emptyStateText: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: Colors.textLight,
    marginTop: 16,
  },
});

export default ShopSetupScreen;