
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import MapScreen from "../screens/Home/MapScreen";
import ServiceProviderScreen from "../screens/Home/ServiceProviderScreen";
import BikeRepairScreen from "../screens/Home/BikeRepairScreen";
import RequestMechanicScreen from "../screens/Home/RequestMechanicScreen";
import ServiceAtGarage from "../screens/HomeScreens/ServiceAtGarage";
import DoorServices from "../screens/HomeScreens/DoorServices";
import EmergencyService from "../screens/HomeScreens/EmergencyServiceScreen";
import MechanicBidScreen from "../screens/Bid/MechanicBidScreen";
import BookingScreen from "../screens/Bid/BookingScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import EditProfile from "../screens/Profile/EditProfile";
import SupportScreen from "../screens/Profile/SupportScreen";
import MainTabs from "./Tab.navigation";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tab"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Tab" component={MainTabs} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="ServiceProviderScreen" component={ServiceProviderScreen} />
      <Stack.Screen name="BikeRepairScreen" component={BikeRepairScreen} />
      <Stack.Screen name="RequestMechanicScreen" component={RequestMechanicScreen} />
      <Stack.Screen name="ServiceAtGarage" component={ServiceAtGarage} />
      <Stack.Screen name="DoorServices" component={DoorServices} />
      <Stack.Screen name="EmergencyService" component={EmergencyService} />
      <Stack.Screen name="MechanicBid" component={MechanicBidScreen} />
      <Stack.Screen name="BookingScreen" component={BookingScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Support" component={SupportScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
