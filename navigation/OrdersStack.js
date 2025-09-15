import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderScreen from '../screens/OrderScreen';
import CustomerScreen from '../screens/CustomerScreen';

const Stack = createNativeStackNavigator();

export default function OrdersStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{
          headerShown: false, 
        }}
      />
<Stack.Screen
 name="CustomerScreen" 
 component={CustomerScreen} options={{ headerShown: false }} />
<Stack.Screen name="AddOrderOption" component={AddOrderOptionScreen} />

    </Stack.Navigator>
  );
}
