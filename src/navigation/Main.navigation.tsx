

// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Image } from "react-native";
// import Home from "../screens/Home/Home";
// import Profile from "../screens/Profile/Profile";
// import Rides from "../screens/Rides/RidesScreen";
// import Wallet from "../screens/Wallet/WalletScreen";

// import { HomeTab } from "../assets/pngs";
// import Ionicons from "react-native-vector-icons/Ionicons";

// type MainTabsParamList = {
//   Home: undefined;
//   Rides: undefined;
//   Wallet: undefined;
//   Profile: undefined;
// };

// const Tab = createBottomTabNavigator<MainTabsParamList>();

// const MainTabs = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: "tomato",
//         tabBarInactiveTintColor: "gray",
//       }}
//     >
//       {/* Home */}
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarLabel: "Home",
//           tabBarIcon: ({ focused, color, size }) => (
//             <Image
//               source={HomeTab}
//               style={{
//                 width: size,
//                 height: size,
//                 tintColor: color,
//               }}
//               resizeMode="contain"
//             />
//           ),
//         }}
//       />

//       {/* Rides */}
//       <Tab.Screen
//         name="Rides"
//         component={Rides}
//         options={{
//           tabBarLabel: "Rides",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="car-outline" size={size} color={color} />
//           ),
//         }}
//       />

//       {/* Wallet */}
//       <Tab.Screen
//         name="Wallet"
//         component={Wallet}
//         options={{
//           tabBarLabel: "Wallet",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="wallet-outline" size={size} color={color} />
//           ),
//         }}
//       />

//       {/* Profile */}
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarLabel: "Profile",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="person-outline" size={size} color={color} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default MainTabs;


// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Image } from "react-native";
// import {
//   Car,
//   Wallet,
//   User,
// } from "lucide-react-native";

// import Home from "../screens/Home/Home";
// import Profile from "../screens/Profile/Profile";
// import Bookings from "../screens/Bookings/BookingsScreen";
// import ChatScreen from "../screens/Wallet/ChatScreen";
// import { HomeTab } from "../assets/pngs";
// import Colors from "../utils/colors.utils";

// type MainTabsParamList = {
//   Home: undefined;
//   Bookings: undefined;
//   Chat: undefined;
//   Profile: undefined;
// };

// const Tab = createBottomTabNavigator<MainTabsParamList>();

// const MainTabs = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: Colors.PRIMARY,
//         tabBarInactiveTintColor: Colors.DARK_GRAY,
//         tabBarStyle: {
//           backgroundColor: Colors.WHITE,
//           borderTopColor: Colors.BORDER_GREY,
//           borderTopWidth: 1,
//         },
//       }}
//     >
//       {/* Home */}
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarLabel: "Home",
//           tabBarIcon: ({ color, size }) => (
//             <Image
//               source={HomeTab}
//               style={{
//                 width: size,
//                 height: size,
//                 tintColor: color,
//               }}
//               resizeMode="contain"
//             />
//           ),
//         }}
//       />

   
//       <Tab.Screen
//         name="Bookings"
//         component={Bookings}
//         options={{
//           tabBarLabel: "Bookings",
//           tabBarIcon: ({ color, size }) => (
//             <Car color={color} size={size} />
//           ),
//         }}
//       />

//       {/* Wallet */}
//       <Tab.Screen
//         name="Chat"
//         component={ChatScreen}
//         options={{
//           tabBarLabel: "Chat",
//           tabBarIcon: ({ color, size }) => (
//             <Wallet color={color} size={size} />
//           ),
//         }}
//       />

//       {/* Profile */}
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarLabel: "Profile",
//           tabBarIcon: ({ color, size }) => (
//             <User color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default MainTabs;

// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Image } from "react-native";
// import {
//   Car,
//   CalendarDays,
//   MessageSquare,
//   User,
//   Import,
// } from "lucide-react-native";
// import HomeStack from "./HomeStack";
// import Home from "../screens/Home/Home";
// import Profile from "../screens/Profile/Profile";
// import Bookings from "../screens/Bookings/BookingsScreen";
// import ChatScreen from "../screens/Chat/ChatScreen";
// import { HomeTab } from "../assets/pngs";
// import Colors from "../utils/colors.utils";


// type MainTabsParamList = {
//   Home: undefined;
//   Bookings: undefined;
//   Chat: undefined;
//   Profile: undefined;
//   WelcomeScreen :undefined;
// };

// const Tab = createBottomTabNavigator<MainTabsParamList>();

// const MainTabs = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: Colors.PRIMARY,
//         tabBarInactiveTintColor: Colors.DARK_GRAY,
//         tabBarStyle: {
//           backgroundColor: Colors.WHITE,
//           borderTopColor: Colors.BORDER_GREY,
//           borderTopWidth: 1,
//         },
//       }}
//     >
      
// <Tab.Screen
//   name="Home"
//   component={HomeStack}
  
// />
// {/* <Tab.Screen name="Home" component={HomeStack} /> */}
//       <Tab.Screen
//         name="Home" component={Home} options={{ tabBarLabel: "Home",tabBarIcon: ({ color, size }) => (
//             <Image source={HomeTab} style={{ width: size + 2,  height: size + 2, tintColor: color,}} 
//               resizeMode="contain" /> ), }}/>

//       <Tab.Screen name="Bookings" component={Bookings}
//         options={{ tabBarLabel: "Bookings", tabBarIcon: ({ color, size }) => (
//             <CalendarDays color={color} size={size} /> ), }}/>


//       <Tab.Screen name="Chat" component={ChatScreen} options={{  tabBarLabel: "Chat",tabBarIcon:({color, size }) => (
//             <MessageSquare color={color} size={size} /> ),}} />

//       <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: "Profile",
//           tabBarIcon: ({ color, size }) => ( <User color={color} size={size} /> ) }} />
//     </Tab.Navigator>
//   );
// };
// export default MainTabs;

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import {
  CalendarDays,
  MessageSquare,
  User,
} from "lucide-react-native";

import HomeStack from "./HomeStack";
import Profile from "../screens/Profile/Profile";
import MechanicBidScreen from "../screens/Bid/MechanicBidScreen";
import ChatScreen from "../screens/Chat/ChatScreen";
import { HomeTab } from "../assets/pngs";
import Colors from "../utils/colors.utils";

type MainTabsParamList = {
  Home: undefined;
  Bid: undefined;
  Chat: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<MainTabsParamList>();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarInactiveTintColor: Colors.DARK_GRAY,
        tabBarStyle: {
          backgroundColor: Colors.WHITE,
          borderTopColor: Colors.BORDER_GREY,
          borderTopWidth: 1,
        },
      }}
    >
      {/* ✅ Home is now using HomeStack */}
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={HomeTab}
              style={{
                width: size + 2,
                height: size + 2,
                tintColor: color,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />

      {/* Bookings */}
      <Tab.Screen
        name="Bid"
        component={MechanicBidScreen}
        options={{
          tabBarLabel: "Bid",
          tabBarIcon: ({ color, size }) => (
            <CalendarDays color={color} size={size} />
          ),
        }}
      />

      {/* Chat */}
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ color, size }) => (
            <MessageSquare color={color} size={size} />
          ),
        }}
      />

      {/* Profile */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <User color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
