
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home/HomeScreen";
import MapScreen from "../screens/Home/MapScreen";
import ServiceProviderScreen from "../screens/Home/ServiceProviderScreen";
import BikeRepairScreen from "../screens/Home/BikeRepairScreen";
import MechanicBidScreen from "../screens/Bid/MechanicBidScreen";
import bikeHome from "../screens/Home/bikeHome";
import RequestMechanicScreen from "../screens/Home/RequestMechanicScreen";
import ServiceAtGarage from "../screens/Home/ServiceAtGarage";


export type HomeStackParamList = {
  HomeScreen: undefined;
  MapScreen: undefined;
  ServiceProviderScreen: undefined;
  BikeRepairScreen: undefined;
  MechanicBidScreen:undefined;
  bikeHome: undefined;
  RequestMechanicScreen :undefined;
  ServiceAtGarage:undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} /> 
      <Stack.Screen name="ServiceProviderScreen"component={ServiceProviderScreen}/>
      <Stack.Screen name="BikeRepairScreen" component={BikeRepairScreen} />
      <Stack.Screen name="MechanicBidScreen" component={MechanicBidScreen} />
      <Stack.Screen name="bikeHome" component={bikeHome} />
      <Stack.Screen name="RequestMechanicScreen" component={RequestMechanicScreen} />
       <Stack.Screen name="ServiceAtGarage" component={ServiceAtGarage} />
    </Stack.Navigator>
  );
};
 
export default HomeStack;
