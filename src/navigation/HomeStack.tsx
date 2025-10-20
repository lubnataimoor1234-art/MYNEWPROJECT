
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import MapScreen from "../screens/Home/MapScreen";
import ServiceProviderScreen from "../screens/Home/ServiceProviderScreen";
import BikeRepairScreen from "../screens/Home/BikeRepairScreen";

import bikeHome from "../screens/Home/BikeHome";
import RequestMechanicScreen from "../screens/Home/RequestMechanicScreen";
import ServiceAtGarage from "../screens/HomeScreens/ServiceAtGarage";
import DoorServices from "../screens/HomeScreens/DoorServices";
import EmergencyService from "../screens/HomeScreens/EmergencyServiceScreen";


export type HomeStackParamList = {
  HomeScreen: undefined;
  MapScreen: undefined;
  ServiceProviderScreen: undefined;
  BikeRepairScreen: undefined;

  bikeHome: undefined;
  RequestMechanicScreen :undefined;
  ServiceAtGarage:undefined;
  DoorServices: undefined;
  EmergencyService:undefined;
  
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name ="Home" component={Home} />
      <Stack.Screen name="MapScreen" component={MapScreen} /> 
      <Stack.Screen name="ServiceProviderScreen"component={ServiceProviderScreen}/>
      <Stack.Screen name="BikeRepairScreen" component={BikeRepairScreen} />
       <Stack.Screen name="bikeHome" component={bikeHome} />
      <Stack.Screen name="RequestMechanicScreen" component={RequestMechanicScreen} />
       <Stack.Screen name="ServiceAtGarage" component={ServiceAtGarage} />
      <Stack.Screen name="DoorServices"component={DoorServices} /> 
      <Stack.Screen name="EmergencyService"component={EmergencyService} />
    </Stack.Navigator>
  );
};
 
export default HomeStack;
