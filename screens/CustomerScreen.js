
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Menu, Provider } from 'react-native-paper';

const CustomerScreen = ({ navigation, route }) => {
  const { type } = route.params || {};

  const [menuVisible, setMenuVisible] = useState(false);
  const [headerMenuVisible, setHeaderMenuVisible] = useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const openHeaderMenu = () => setHeaderMenuVisible(true);
  const closeHeaderMenu = () => setHeaderMenuVisible(false);

  const handleAddNew = () => {
    closeMenu();
    closeHeaderMenu();
    navigation.navigate('AddCustomer');
  };

  const handleSelectContact = () => {
    closeMenu();
    closeHeaderMenu();
   navigation.navigate('Customercontact');
  };

  return (
    <Provider>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Select Customer</Text>
          <Menu
            visible={headerMenuVisible}
            onDismiss={closeHeaderMenu}
            anchor={
              <TouchableOpacity onPress={openHeaderMenu}>
                <Icon name="add" size={28} color="#fff" />
              </TouchableOpacity>
            }
          >
            <Menu.Item
              onPress={handleAddNew}
              title="Add New Contact"
              leadingIcon="plus"
            />
            <Menu.Item
              onPress={handleSelectContact}
              title="Select a Phone Contact"
              leadingIcon="account"
            />
          </Menu>
        </View>

   
        <View style={styles.content}>
          <Menu
            visible={menuVisible}
            onDismiss={closeMenu}
            anchor={
              <TouchableOpacity style={styles.button} onPress={openMenu}>
                <Text style={styles.buttonText}>Add Customer</Text>
              </TouchableOpacity>
            }
          >
            <Menu.Item
              onPress={handleAddNew}
              title="Add New Contact"
              leadingIcon="plus"
            />
            <Menu.Item
              onPress={handleSelectContact}
              title="Select a Phone Contact"
              leadingIcon="account"
            />
          </Menu>
        </View>
      </View>
    </Provider>
  );
};

export default CustomerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 110,
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '500',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#000',
    paddingHorizontal: 50,
    paddingVertical: 20,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
