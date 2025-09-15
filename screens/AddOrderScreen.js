import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddOrderScreen = () => {
  const navigation = useNavigation();

  const handleSelect = (type) => {
    navigation.navigate('CustomerScreen', { type }); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.box}
        onPress={() => handleSelect('stitching')}
      >
        <Text style={styles.boxText}>➕ New Stitching</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.box}
        onPress={() => handleSelect('material')}
      >
        <Text style={styles.boxText}>➕ New Material Sale</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.box}
        onPress={() => handleSelect('readymade')}
      >
        <Text style={styles.boxText}>➕ New Readymade Sale</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  boxText: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default AddOrderScreen;
