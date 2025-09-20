
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const IconLibraries = {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
};

const menuItems = [
  { label: 'Orders', icon: 'cart-outline', iconLib: 'Ionicons' },
  { label: 'Stores', icon: 'storefront', iconLib: 'MaterialIcons' },
  { label: 'Customers', icon: 'people-outline', iconLib: 'Ionicons' },
  { label: 'Workers', icon: 'people-outline', iconLib: 'Ionicons' },
  { label: 'Inventory', icon: 'box', iconLib: 'FontAwesome5' },
  { label: 'Shop Expenses', icon: 'receipt-outline', iconLib: 'Ionicons' },
  { label: 'Administration', icon: 'briefcase-outline', iconLib: 'Ionicons' },
  { label: 'Shop Reviews', icon: 'chatbox-ellipses-outline', iconLib: 'Ionicons' },
  { label: 'Backup Data', icon: 'cloud-upload-outline', iconLib: 'Ionicons' },
  { label: 'Settings', icon: 'settings-outline', iconLib: 'Ionicons' },
  { label: 'My Account', icon: 'person-circle-outline', iconLib: 'Ionicons' },
  { label: 'Tutorials', icon: 'play-circle-outline', iconLib: 'Ionicons' },
  { label: 'Contact Us', icon: 'call-outline', iconLib: 'Ionicons' },
];

export default function CustomDrawerContent({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.profileContainer}>
        <View style={styles.avatar} />
        <Text style={styles.shopName}>My Shop</Text>
        <Text style={styles.shopLocation}>DHA</Text>
      </View>

    
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => {
          const IconComponent = IconLibraries[item.iconLib];

          return (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => navigation.navigate(item.label)}
            >
              <IconComponent
                name={item.icon}
                size={22}
                color="#000"
                style={styles.icon}
              />
              <Text style={styles.menuText}>{item.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  shopName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  shopLocation: {
    fontSize: 14,
    color: '#666',
  },
  menuContainer: {},
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  icon: {
    marginRight: 15,
  },
  menuText: {
    fontSize: 16,
  },
});
