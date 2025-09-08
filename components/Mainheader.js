// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import Feather from 'react-native-vector-icons/Feather';
// import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
// import Colors from '../utils/i vdswa ht578ik,m zsdfghjkufdzzdfyuiuhgfxcolorUtil';

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Colors from '../utils/colorUtil';
const MainHeader = ({ title = 'Order List', onAddPress }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      {/* Drawer Icon */}
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Ionicons name="menu" size={24} color={Colors.white} />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Plus (+) icon */}
      <TouchableOpacity onPress={onAddPress}>
        <Ionicons name="add" size={24} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default MainHeader;
const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    backgroundColor: Colors.black,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 40, // status bar spacing
  },
  title: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: '600',
  },
});


