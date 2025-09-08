// src/navigation/OrdersStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GalleryScreen from '../screens/GalleryScreen';
import COLORS from '../constants/COLORS';
import STRINGS from '../constants/STRINGS';

const Stack = createNativeStackNavigator();

export default function GalleryStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="GalleryMain"
                component={GalleryScreen}
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
