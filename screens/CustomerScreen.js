
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MainHeader from '../components/MainHeader';
const CustomerScreen = ({ navigation, route }) => {
  const { type } = route.params || {}; 

  return (
    <View style={styles.container}>
      <MainHeader title ="customer"  />
      <Text style={styles.title}>Select Customer</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert(`Add customer for ${type || 'unknown'} order`)}
      >
        <Text style={styles.buttonText}>Add Customer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
