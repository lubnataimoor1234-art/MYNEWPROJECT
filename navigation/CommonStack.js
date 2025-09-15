import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ImageViewScreen from '../screens/ImageViewScreen';

const Stack = createNativeStackNavigator();

export default function CommonStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ImageView" component={ImageViewScreen} />
    </Stack.Navigator>
  );
}
