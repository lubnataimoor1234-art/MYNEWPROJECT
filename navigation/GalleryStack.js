


// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import GalleryScreen from '../screens/GalleryScreen';
// import ImageViewScreen from '../screens/ImageViewScreen';

// const Stack = createNativeStackNavigator();

// export default function GalleryStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="GalleryMain"
//         component={GalleryScreen}
//         options={{
//           headerShown: false, 
//         }}
//       />
//       <Stack.Screen
//         name="ImageViewScreen"
//         component={ImageViewScreen}
//         options={{
//           headerShown: false, // Full screen image view
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GalleryScreen from '../screens/GalleryScreen'; 
import ImageViewScreen from '../screens/ImageViewScreen'; 

const Stack = createStackNavigator();

export default function GalleryStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6200ee',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="GalleryMain" 
        component={GalleryScreen}
        options={{ 
          title: 'Gallery',
          headerShown: true 
        }}
      />
      <Stack.Screen 
        name="ImageView" 
        component={ImageViewScreen}
        options={{ 
          title: 'Image View',
          headerShown: true,
          presentation: 'modal',
          headerStyle: {
            backgroundColor: '#000',
          },
        }}
      />
    </Stack.Navigator>
  );
}