


import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import MainHeader from '../components/MainHeader';
import styles from '../styles/OrderStyle';
import STRINGS from '../constants/STRINGS';
import AddOrderOption from '../components/AddOrderOption';

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
  const [showMenu, setShowMenu] = useState(false); 
  return (
    <SafeAreaView style={styles.container}>
      <MainHeader title={STRINGS.orderList}  />
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
                <View style={styles.fullTabScreen}>
                  <ShowFilterInfo />
                  <View style={styles.centeredContent}>
                    <Text style={styles.noTaskText}>Welcome to TailorMate</Text>
                    <TouchableOpacity
                      style={styles.manageButton}
                      onPress={() => setShowMenu(!showMenu)} 
                    >
                      <Text style={styles.addOrderText}>Add an Order</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <TabScreen label={tab.labelText} />
              )
            }
          />
        ))}
      </Tab.Navigator>
      {showMenu && <AddOrderOption onClose={() => setShowMenu(false)} />}
    </SafeAreaView>
  );
};
export default OrdersScreen;
