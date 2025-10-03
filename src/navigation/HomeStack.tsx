// import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Home from "../screens/Home/Home";
// import MapScreen from ".././screens/MapScreen";
// //import ServiceProviderScreen from "../../screens/Service/ServiceProviderScreen";

// const Stack = createNativeStackNavigator();

// const HomeStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="HomeMain" component={Home} />
//       <Stack.Screen name="MapScreen" component={MapScreen} />
//       {/* <Stack.Screen name="ServiceProviderScreen" component={ServiceProviderScreen} /> */}
//     </Stack.Navigator>
//   );
// };

// export default HomeStack;


import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home/HomeScreen";
import MapScreen from "../screens/Home/MapScreen";
import ServiceProviderScreen from "../screens/Home/ServiceProviderScreen";
import WhatsWrongScreen from "../screens/Home/WhatsWrongScreen";
import ConfirmRequest from "../screens/Home/ConfirmRequest";
import BikeRepairScreen from "../screens/Home/BikeRepairScreen";
import MechanicBidScreen from "../screens/Bid/MechanicBidScreen";
import bikeHome from "../screens/Home/bikeHome";
export type HomeStackParamList = {
  HomeScreen: undefined;
  MapScreen: undefined;
  ServiceProviderScreen: undefined;
  WhatsWrongScreen:undefined;
  ConfirmRequest:undefined;
  BikeRepairScreen: undefined;
  MechanicBidScreen:undefined;
  bikeHome: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} /> 
      <Stack.Screen name="ServiceProviderScreen"component={ServiceProviderScreen}/>
      <Stack.Screen name="WhatsWrongScreen" component={WhatsWrongScreen} />
     <Stack.Screen name="ConfirmRequest" component={ConfirmRequest} />
      <Stack.Screen name="BikeRepairScreen" component={BikeRepairScreen} />
      <Stack.Screen name="MechanicBidScreen" component={MechanicBidScreen} />
      <Stack.Screen name="bikeHome" component={bikeHome} />
    </Stack.Navigator>
  );
};
 
export default HomeStack;
