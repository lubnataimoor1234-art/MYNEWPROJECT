
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import OrdersStack from './navigation/OrdersStack';
import GalleryStack from './navigation/GalleryStack';
import ReportsStack from './navigation/ReportsStack';
import CustomDrawerContent from './components/CustomDrawerContent';
import BottomTabNavigator from './navigation/BottomTabNavigator'; 
import { navigationRef } from './navigation/NavigationService';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      
      <Drawer.Navigator

        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name="Home" component={BottomTabNavigator} />
        <Drawer.Screen name="Orders" component={OrdersStack} />
        <Drawer.Screen name="Gallery" component={GalleryStack} />
        <Drawer.Screen name="Reports" component={ReportsStack} />
              
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


