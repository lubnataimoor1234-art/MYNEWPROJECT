import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import OrdersStack from "./navigation/OrdersStack";
import GalleryStack from "./navigation/GalleryStack";
import CustomDrawerContent from "./components/CustomDrawerContent";

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
        {/* Additional drawer screens via Stack navigators */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
