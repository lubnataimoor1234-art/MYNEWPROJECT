
import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Colors from '../utils/colors.utils';
import Icon from 'react-native-vector-icons/Ionicons';

const mockSuggestions = [
  'Karachi, Pakistan',
  'Lahore, Pakistan',
  'Islamabad, Pakistan',
  'Rawalpindi, Pakistan',
  'Multan, Pakistan',
];

const LocationModal = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) => {
  const [search, setSearch] = useState('');

  const filteredSuggestions = mockSuggestions.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.overlay}
      >
        <View style={styles.modalContainer}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Select Location</Text>
            <TouchableOpacity onPress={onClose}>
              <Icon name="close" size={24} color={Colors.TEXT} />
            </TouchableOpacity>
          </View>

          {/* Search Bar */}
          <View style={styles.searchBar}>
            <Icon name="search-outline" size={20} color={Colors.DARK_GRAY} />
            <TextInput
              placeholder="Search for a location"
              placeholderTextColor={Colors.DARK_GRAY}
              value={search}
              onChangeText={setSearch}
              autoFocus
              style={styles.searchInput}
            />
          </View>

          {/* Active Location */}
          <TouchableOpacity style={styles.activeLocation}>
            <Icon name="locate-outline" size={20} color={Colors.PRIMARY} />
            <Text style={styles.activeLocationText}>Use current location</Text>
          </TouchableOpacity>

          {/* Suggestions */}
          <FlatList
            data={filteredSuggestions}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.suggestionItem}>
                <Icon name="location-outline" size={18} color={Colors.DARK_GRAY} />
                <Text style={styles.suggestionText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default LocationModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#00000088',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: Colors.WHITE,
    height: '85%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.TEXT,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.BORDER_GREY,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 15,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: Colors.TEXT,
  },
  activeLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeLocationText: {
    marginLeft: 10,
    color: Colors.PRIMARY,
    fontWeight: '600',
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomColor: Colors.BORDER_GREY,
    borderBottomWidth: 1,
  },
  suggestionText: {
    marginLeft: 10,
    color: Colors.TEXT,
  },
});
