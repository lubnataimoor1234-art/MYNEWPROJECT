// import React from 'react';
// import { ScrollView, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

// const MenuItems = ({ activeMenu, onMenuPress }) => {
//   const menuItems = [
//     { id: 'dashboard', name: 'Outlet Dashboard', screenName: 'DashboardScreen' },
//     { id: 'monthly', name: 'Monthly Data', screenName: 'MonthlyDataScreen' },
//     { id: 'sales', name: 'Sales', screenName: 'SalesScreen' },
//     { id: 'payments', name: 'Payments', screenName: 'PaymentsScreen'},
//     { id: 'dues', name: 'Dues', screenName: 'DuesScreen' },
//     { id: 'reports', name: 'Bill', screenName: 'BillScreen' },
//   ];

//   return (
//     <ScrollView 
//       horizontal 
//       showsHorizontalScrollIndicator={false}
//       style={styles.menuContainer}
//       contentContainerStyle={styles.menuContent}
//     >
//       {menuItems.map((item) => {
//         const isActive = activeMenu === item.name;
//         return (
//           <TouchableOpacity
//             key={item.id}
//             style={[
//               styles.menuItem,
//               isActive && styles.activeMenuItem
//             ]}
//             onPress={() => onMenuPress(item)}
//             activeOpacity={0.7}
//           >
//             <Text style={[
//               styles.menuText,
//               isActive && styles.activeMenuText
//             ]}>
//               {item.name}
//             </Text>
//             {isActive && <Animated.View style={styles.activeIndicator} />}
//           </TouchableOpacity>
//         );
//       })}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   menuContainer: {
//     margin:0,
//     pendding:0,
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//     height: 52,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   menuContent: {
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     alignItems: 'center',
//   },
//   menuItem: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     marginRight: 6,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'relative',
//     backgroundColor: 'transparent',
//   },
//   activeMenuItem: {
//     backgroundColor: '#f8f9fa',
//   },
//   menuText: {
//     fontSize: 14,
//     color: '#64748b',
//     fontWeight: '500',
//     letterSpacing: 0.3,
//   },
//   activeMenuText: {
//     color: '#0a0a0aff',
//     fontWeight: '600',
//   },
//   activeIndicator: {
//     position: 'absolute',
//     bottom: -10,
//     height: 3,
//     width: '60%',
//     backgroundColor: '#0d0d0eff',
//     borderTopLeftRadius: 2,
//     borderTopRightRadius: 2,
//   },
// });

// export default MenuItems;



import React from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const MenuItems = ({ activeMenu, onMenuPress }) => {
  const menuItems = [
    { id: 'dashboard', name: 'Outlet Dashboard', screenName: 'DashboardScreen' },
    { id: 'monthly', name: 'Monthly Data', screenName: 'MonthlyDataScreen' },
    { id: 'sales', name: 'Sales', screenName: 'SalesScreen' },
    { id: 'payments', name: 'Payments', screenName: 'PaymentsScreen' },
    { id: 'dues', name: 'Dues', screenName: 'DuesScreen' },
    { id: 'reports', name: 'Bill', screenName: 'BillScreen' },
  ];

  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      style={styles.menuContainer}
      contentContainerStyle={styles.menuContent}
    >
      {menuItems.map((item) => {
        const isActive = activeMenu === item.name;
        return (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.menuItem,
              isActive && styles.activeMenuItem
            ]}
            onPress={() => onMenuPress(item)}
            activeOpacity={0.7}
          >
            <Text style={[
              styles.menuText,
              isActive && styles.activeMenuText
            ]}>
              {item.name}
            </Text>
            {isActive && <Animated.View style={styles.activeIndicator} />}
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingTop: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3},
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
    height : 100,
  },
  menuContent: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  menuItem: {
    paddingHorizontal: 12,
    paddingVertical: 4, // smaller padding
    marginRight: 6,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  activeMenuItem: {
    backgroundColor: '#f1f5f9',
  },
  menuText: {
    fontSize: 20, // slightly smaller font
    color: '#64748b',
    fontWeight: '500',
  },
  activeMenuText: {
    color: '#0a0a0aff',
    fontWeight: '600',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: -6,
    height: 2,
    width: '60%',
    backgroundColor: '#0d0d0eff',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
});

export default MenuItems;
