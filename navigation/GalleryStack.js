import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GalleryScreen from '../screens/GalleryScreen';
import ImageViewScreen from '../screens/ImageViewScreen';

const Stack = createNativeStackNavigator();

export default function GalleryStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="GalleryMain"
                component={GalleryScreen}
                options={{  
                    headerShow : false,
                }}
            />
            <Stack.Screen name="ImageView" component={ImageViewScreen} />
        </Stack.Navigator>
    );
}



