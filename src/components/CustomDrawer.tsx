import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Colors from '../utils/colors.utils';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <View style={styles.container}>
 
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/images/avatar.png')} // Replace with your avatar image
          style={styles.avatar}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>lubna</Text>
          <Text style={styles.rating}>⭐ 4.8</Text>
        </View>
        <Icon name="chevron-forward" size={20} color={Colors.TEXT} />
      </View>

      <ScrollView style={{ flex: 1 }}>
        {[
          { icon: 'car-outline', label: 'City' },
          { icon: 'time-outline', label: 'Request history' },
          { icon: 'cube-outline', label: 'Couriers' },
          { icon: 'briefcase-outline', label: 'Business delivery' },
          { icon: 'globe-outline', label: 'City to City' },
          { icon: 'cube-outline', label: 'Freight' },
          { icon: 'notifications-outline', label: 'Notifications' },
          { icon: 'shield-checkmark-outline', label: 'Safety' },
          { icon: 'settings-outline', label: 'Settings' },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Icon name={item.icon} size={22} color={Colors.DARK_GRAY} />
            <Text style={styles.menuLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

     
      <TouchableOpacity style={styles.driverBtn}>
        <Text style={styles.driverBtnText}>Driver mode</Text>
      </TouchableOpacity>

      
      <View style={styles.socialIcons}>
        <FontAwesome name="facebook-square" size={30} color="#1877F2" />
        <FontAwesome name="instagram" size={30} color="#C13584" />
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    gap: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.TEXT,
  },
  rating: {
    fontSize: 14,
    color: Colors.DARK_GRAY,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    gap: 15,
  },
  menuLabel: {
    fontSize: 15,
    color: Colors.TEXT,
  },
  driverBtn: {
    backgroundColor: Colors.YELLOW,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 15,
  },
  driverBtnText: {
    fontWeight: 'bold',
    color: Colors.TEXT,
    fontSize: 16,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 20,
  },
});



