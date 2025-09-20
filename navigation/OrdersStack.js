
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderScreen from '../screens/OrderScreen';
import CustomerScreen from '../screens/CustomerScreen';
import AddCustomerScreen from '../screens/AddCustomerScreen';
import CustomerContactScreen from "../screens/CustomerContactScreen";
const Stack = createNativeStackNavigator();

export default function OrdersStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="OrderScreen" 
        component={OrderScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="CustomerScreen" 
        component={CustomerScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="AddCustomer"   
        component={AddCustomerScreen} 
        options={{ headerShown: false }} 
      />
       <Stack.Screen name="CustomerContact" component={CustomerContactScreen}  options={{ headerShown: false }}/>  
    </Stack.Navigator>
  );
}
