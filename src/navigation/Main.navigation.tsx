
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import {
  CalendarDays,
  MessageSquare,
  User,
} from "lucide-react-native";

import HomeStack from "./HomeStack";
//import Profile from "../screens/Profile/Profile";
import MechanicBidScreen from "../screens/Bid/MechanicBidScreen";
import HistoryScreen from "../screens/History/HistoryScreen";
import { HomeTab } from "../assets/pngs";
import Colors from "../utils/colors.utils";
import ProfileStack from "./ProfileStack";
type MainTabsParamList = {
  Home: undefined;
  Bid: undefined;
  History: undefined;
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


      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarLabel: "History",
          tabBarIcon: ({ color, size }) => (
            <MessageSquare color={color} size={size} />
          ),
        }}
      />

      {/* <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <User color={color} size={size} />
          ),
        }}
      /> */}
      <Tab.Screen
  name="Profile"
  component={ProfileStack}
  options={{
    headerShown: false,
    tabBarLabel: "Profile",
    tabBarIcon: ({ color }) => (
      <User size={22} color={color} />
    ),
  }}
/>
    </Tab.Navigator>
  );
};

export default MainTabs;


