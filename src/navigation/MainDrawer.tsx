
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabs from "./Main.navigation";
import CustomDrawer from "../components/CustomDrawer";

export type DrawerParamList = {
  MainTabs: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const MainDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="MainTabs" component={MainTabs} />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
