
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import OrdersStack from './navigation/OrdersStack';
import GalleryStack from "./navigation/GalleryStack";
import CustomDrawerContent from './components/CustomDrawerContent';
import ReportsStack from "./navigation/ReportsStack";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{ headerShown: false }} // Hide default drawer headers
      >
        <Drawer.Screen name="Orders" component={OrdersStack} />
        <Drawer.Screen name="Gallery" component={GalleryStack} />
        <Drawer.Screen name="Reports" component={ReportsStack} />
        {/* Additional drawer screens via Stack navigators */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons'; 


// import OrderScreen from './screens/MyOrderScreen';
// import TaskScreen from './screens/TaskScreen';
// import GalleryScreen from './screens/GalleryScreen';
// import ReportScreen from './screens/ReportScreen';
// import CustomDrawerContent from './components/CustomDrawerContent';

// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

// function BottomTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarIcon: ({ color, size }) => {
//           let iconName;
//           if (route.name === 'Order') iconName = 'list';
//           else if (route.name === 'Task') iconName = 'checkmark-done';
//           else if (route.name === 'Gallery') iconName = 'images';
//           else if (route.name === 'Report') iconName = 'document-text';
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: 'blue',
//         tabBarInactiveTintColor: 'gray',
//       })}
//     >
//       <Tab.Screen name="Order" component={OrderScreen} />
//       <Tab.Screen name="Task" component={TaskScreen} />
//       <Tab.Screen name="Gallery" component={GalleryScreen} />
//       <Tab.Screen name="Report" component={ReportScreen} />
//     </Tab.Navigator>
//   );
// }


// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         drawerContent={(props) => <CustomDrawerContent {...props} />}
//         screenOptions={{ headerShown: false }}
//       >
//         <Drawer.Screen name="Home" component={BottomTabs} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }


