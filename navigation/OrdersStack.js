// src/navigation/OrdersStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrdersScreen from '../screens/OrdersScreen';
import COLORS from '../constants/COLORS';
import STRINGS from '../constants/STRINGS';

const Stack = createNativeStackNavigator();

export default function OrdersStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OrdersMain"
        component={OrdersScreen}
        options={{
          title: STRINGS.orderList,
          headerStyle: { backgroundColor: COLORS.black },
          headerTintColor: COLORS.white,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}
