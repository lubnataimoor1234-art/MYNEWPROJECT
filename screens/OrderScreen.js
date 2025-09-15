


import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import MainHeader from '../components/MainHeader';
import styles from '../styles/OrderStyle';
import STRINGS from '../constants/STRINGS';
import AddOrderScreen from './AddOrderScreen';

const Tab = createMaterialTopTabNavigator();

const tabList = [
  { name: 'Active', label: 'Active', labelText: STRINGS.activeOrders },
  { name: 'PastDue', label: 'Past Due', labelText: STRINGS.pastDueOrders },
  { name: 'Upcoming', label: 'Upcoming', labelText: STRINGS.upcomingOrders },
  { name: 'Completed', label: 'Completed', labelText: STRINGS.completedOrders },
  { name: 'Urgent', label: 'Urgent', labelText: STRINGS.urgentOrders },
  { name: 'Delivered', label: 'Delivered', labelText: STRINGS.deliveredOrders },
  { name: 'InTransit', label: 'In Transit', labelText: STRINGS.inTransitOrders },
];

const ShowFilterInfo = () => (
  <View style={styles.textSection}>
    <Text style={styles.showingText}>
      Showing Last 90 Days orders.{' '}
      <Text style={styles.editText} onPress={() => alert('Edit pressed')}>
        Edit
      </Text>
    </Text>
  </View>
);

const ActiveTabScreen = () => (
  <View style={styles.fullTabScreen}>
    <ShowFilterInfo />
    <View style={styles.centeredContent}>
      <Text style={styles.noTaskText}>Welcom to TailorMate</Text>
      <TouchableOpacity
        style={styles.manageButton}
        onPress={() => alert('Add new order')}
      >
        <Text style={styles.addOrderText}>Add an Order</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const TabScreen = ({ label }) => (
  <View style={styles.fullTabScreen}>
    <ShowFilterInfo />
    <View style={styles.centeredContent}>
      <Text style={styles.noTaskText}>{label}</Text>
    </View>
  </View>
);


const OrdersScreen = () => {
  const navigation = useNavigation();
 
  

  return (
    <SafeAreaView style={styles.container}>
      <MainHeader title={STRINGS.orderList} onAddPress={() => navigation.navigate('AddOrderScreen')}/>
      <View style={styles.trialBanner}>
        <Text style={styles.trialBannerText}>
          Your Trial Plan expires in 29 days!
        </Text>
        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buyNowText}>Buy Now!</Text>
        </TouchableOpacity>
      </View>

      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarLabelStyle: styles.tabLabelStyle,
          tabBarIndicatorStyle: styles.tabIndicator,
        }}
      >
        {tabList.map((tab) => (
          <Tab.Screen
            key={tab.name}
            name={tab.name}
            options={{ tabBarLabel: tab.label }}
            children={() =>
              tab.name === 'Active' ? (
                <ActiveTabScreen />
              ) : (
                <TabScreen label={tab.labelText} />
              )
            }
          />
        ))}
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default OrdersScreen;

const headerMenuStyles = StyleSheet.create({
  dropdownMenu: {
    position: 'absolute',
    top: 90, 
    right: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5,
    zIndex: 1000,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  menuItem: {
    paddingVertical: 10,
  },
  menuText: {
    fontSize: 16,
  },
});
