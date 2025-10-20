import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MechanicBidScreen from "../screens/Bid/MechanicBidScreen";
//import BookingsScreen from "../screens/Bid/BookingsScreen";
// import TrackMechanicScreen from "../screens/Bid/TrackMechanicScreen";
import Colors from "../utils/Colors.utils";

// ✅ Define type for stack navigation routes
export type BidStackParamList = {
  MechanicBid: undefined;
  BookingsScreen: undefined;
  // TrackMechanic: undefined;
};

const Stack = createNativeStackNavigator<BidStackParamList>();

const BidStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        contentStyle: { backgroundColor: Colors.BACKGROUND },
      }}
    >
      <Stack.Screen name="MechanicBid" component={MechanicBidScreen} />
      {/* <Stack.Screen name="BookingsScreen" component={BookingsScreen} /> */}
      {/* <Stack.Screen name="TrackMechanic" component={TrackMechanicScreen} /> */}
    </Stack.Navigator>
  );
};

export default BidStack;
