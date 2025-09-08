// OrdersStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OrdersTabNavigator from './OrdersTabNavigator'; // path to tab file

const Stack = createStackNavigator();

export default function OrdersStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={OrdersTabNavigator} />
      {/* You can add more screens here later if needed */}
    </Stack.Navigator>
  );
}
