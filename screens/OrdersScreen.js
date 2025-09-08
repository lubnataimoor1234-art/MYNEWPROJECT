 import React, { useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import styles from '../styles/OrderStyle';
import COLORS from '../constants/COLORS';
import STRINGS from '../constants/STRINGS';

const Tab = createMaterialTopTabNavigator();

const TabScreen = ({ label }) => (
  <View style={styles.tabContent}>
    <Text style={styles.tabLabel}>{label}</Text>
  </View>
);

const ActiveTab = () => <TabScreen label={STRINGS.activeOrders} />;
const PastDueTab = () => <TabScreen label={STRINGS.pastDueOrders} />;
const UpcomingTab = () => <TabScreen label={STRINGS.upcomingOrders} />;
const CompletedTab = () => <TabScreen label={STRINGS.completedOrders} />;
const UrgentTab = () => <TabScreen label={STRINGS.urgentOrders} />;
const DeliveredTab = () => <TabScreen label={STRINGS.deliveredOrders} />;
const InTransitTab = () => <TabScreen label={STRINGS.inTransitOrders} />;

const OrdersScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: STRINGS.orderList,
      headerStyle: {
        backgroundColor: COLORS.black,
        height: 100,
      },
      headerTintColor: COLORS.white,
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ marginLeft: 15 }}>
          <Ionicons name="menu" size={24} color={COLORS.white} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => alert('Add order pressed')} style={styles.headerIcon}>
          <Ionicons name="add" size={24} color={COLORS.white} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Trial Plan Banner */}
      <View style={styles.trialBanner}>
        <Text style={styles.trialBannerText}>Your Trial Plan expires in 29 days!</Text>
        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buyNowText}>Buy Now!</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarLabelStyle: styles.tabLabelStyle,
          tabBarIndicatorStyle: styles.tabIndicator,
        }}
      >
        <Tab.Screen name="Active" component={ActiveTab} />
        <Tab.Screen name="Past Due" component={PastDueTab} />
        <Tab.Screen name="Upcoming" component={UpcomingTab} />
        <Tab.Screen name="Completed" component={CompletedTab} />
        <Tab.Screen name="Urgent" component={UrgentTab} />
        <Tab.Screen name="Delivered" component={DeliveredTab} />
        <Tab.Screen name="In Transit" component={InTransitTab} />
      </Tab.Navigator>

      {/* Text Section */}
      <View style={styles.textSection}>
        <Text style={styles.showingText}>
          Showing Last 90 Days orders. <Text style={styles.editText}>Edit</Text>
        </Text>
      </View>

      {/* Center Content */}
      <View style={styles.centerContent}>
        <Text style={styles.welcomeText}>Welcome to TailorMate!</Text>
        <TouchableOpacity style={styles.addOrderButton}>
          <Text style={styles.addOrderText}>Add an Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrdersScreen;

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   SafeAreaView,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// const tabs = ['Active', 'Past Due', 'Upcoming', 'Completed', 'Urgent'];

// export default function OrderListScreen({ navigation }) {
//   const [activeTab, setActiveTab] = useState('Active');

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.openDrawer()}>
//           <Ionicons name="menu" size={26} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Order List</Text>
//         <TouchableOpacity>
//           <Ionicons name="add" size={26} color="#fff" />
//         </TouchableOpacity>
//       </View>

//       {/* Trial Banner */}
//       <View style={styles.trialBanner}>
//         <Text style={styles.trialText}>Your Trial Plan expires in 27 days!</Text>
//         <TouchableOpacity style={styles.buyNow}>
//           <Text style={styles.buyNowText}>Buy Now !</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Tabs */}
//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         style={styles.tabBar}
//         contentContainerStyle={styles.tabContainer}
//       >
//         {tabs.map((tab) => (
//           <TouchableOpacity
//             key={tab}
//             onPress={() => setActiveTab(tab)}
//             style={[styles.tabItem, activeTab === tab && styles.activeTab]}
//           >
//             <Text
//               style={[
//                 styles.tabText,
//                 activeTab === tab && styles.activeTabText,
//               ]}
//             >
//               {tab}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>

//       {/* Filter Text */}
//       <View style={styles.textSection}>
//          <Text style={styles.showingText}>
//            Showing Last 90 Days orders. <Text style={styles.editText}>Edit</Text>
//         </Text>      
//         <Ionicons name="search" size={20} color="#999" />
     
//  </View>
//       {/* Empty State */}
//       <View style={styles.emptyState}>
//         <Text style={styles.welcomeText}>Welcome to TailorMate!</Text>
//         <TouchableOpacity style={styles.addOrderBtn}>
//           <Text style={styles.addOrderText}>Add an Order</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     backgroundColor: '#000',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingTop: 15,
//     paddingBottom: 20,
//   },
//   headerTitle: {
//     color: '#fff',
//     fontSize: 22,
//     fontWeight: 'bold',
//   },
//   trialBanner: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#8000ff',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     alignItems: 'center',
//   },
//   trialText: {
//     color: '#fff',
//     fontSize: 13,
//   },
//   buyNow: {
//     backgroundColor: '#000',
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     borderRadius: 4,
//   },
//   buyNowText: {
//     color: '#fff',
//     fontSize: 13,
//     fontWeight: '600',
//   },
//   tabBar: {
//     borderColor: '#ddd',
//   },
//   tabContainer: {
//     borderColor:'#ddd', 
//     flexDirection: 'row',
//     paddingHorizontal: 10,
//     height: 50,
//     orderBottomWidth: 1,
//   },
//   tabItem: {
//    orderBottomWidth: 1,
//     marginRight: 20,
//     paddingVertical: 10,
//     borderBottomWidth: 2,
//     borderBottomColor: 'transparent',
//   },
//   tabText: {
//     fontSize: 15,
//     color: '#777',
    
//   },
//   activeTab: {
//     borderBottomColor: '#000',
    
//   },
//   activeTabText: {
//     color: '#000',
//     fontWeight: '600',
//   },
//   orderInfoBox: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderColor: '#eee',
//     alignItems: 'center',
    
//   },
//   orderInfo: {
//     paddingHorizontal: 16,
//     marginTop: 1,
//     color: '#666',
//     fontSize: 14,
//   },
//   editLink: {
//     color: '#000',
//     textDecorationLine: 'underline',
//   },
//   emptyState: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   welcomeText: {
//     fontSize: 16,
//     color: '#333',
//     marginBottom: 20,
//   },
//   addOrderBtn: {
//     backgroundColor: '#000',
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 30,
//   },
//   addOrderText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

