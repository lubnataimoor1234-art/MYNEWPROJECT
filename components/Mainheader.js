
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../constants/COLORS';
const MainHeader = ({ title, onAddPress  }) => {
  const navigation = useNavigation();

 return (
    <View style={styles.header}>
      

      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Ionicons name="menu" size={24} color={COLORS.white} />
      </TouchableOpacity>
<Text style={styles.title}>{title}</Text>
      

      {onAddPress ? (
        <TouchableOpacity onPress={onAddPress}>
          <Ionicons name="add" size={24} color={COLORS.white} />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 5 }} /> 
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: '#000',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '500',
    alignContent: 'center',
  },
});

export default MainHeader;
