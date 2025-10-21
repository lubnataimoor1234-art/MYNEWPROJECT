
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Auth Screens
import SignIn from "../screens/auth/SignIn/SignIn";
import SignUp from "../screens/auth/SignUp/SignUp";
import ForgotPassword from "../screens/auth/ForgotPassword/ForgotPassword";
// Home Screens
import Home from "../screens/Home/Home";
import MapScreen from "../screens/Home/MapScreen";
import ServiceProviderScreen from "../screens/Home/ServiceProviderScreen";
import BikeRepairScreen from "../screens/Home/BikeRepairScreen";
import BikeHome from "../screens/Home/BikeHome";
import RequestMechanicScreen from "../screens/Home/RequestMechanicScreen";
import ServiceAtGarage from "../screens/HomeScreens/ServiceAtGarage";
import DoorServices from "../screens/HomeScreens/DoorServices";
import EmergencyService from "../screens/HomeScreens/EmergencyServiceScreen";

const Stack = createNativeStackNavigator();

const AuthHomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn" 
      screenOptions={{ headerShown: false }}
    >
   
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="ServiceProviderScreen" component={ServiceProviderScreen} />
      <Stack.Screen name="BikeRepairScreen" component={BikeRepairScreen} />
      <Stack.Screen name="BikeHome" component={BikeHome} />
      <Stack.Screen name="RequestMechanicScreen" component={RequestMechanicScreen} />
      <Stack.Screen name="ServiceAtGarage" component={ServiceAtGarage} />
      <Stack.Screen name="DoorServices" component={DoorServices} />
      <Stack.Screen name="EmergencyService" component={EmergencyService} />
    </Stack.Navigator>
  );
};

export default AuthHomeStack;
