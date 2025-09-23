
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import EditProfile from "../screens/Profile/EditProfile";
import SupportScreen from "../screens/Profile/SupportScreen";

const Stack = createNativeStackNavigator();

const AuthProfileStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    <Stack.Screen name="EditProfile" component={EditProfile} />
    <Stack.Screen name="Support" component={SupportScreen} />
  </Stack.Navigator>
);

export default AuthProfileStack;
