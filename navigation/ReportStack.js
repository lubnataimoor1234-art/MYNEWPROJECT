import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReportsScreen from '../screens/ReportsScreen';
import COLORS from '../constants/COLORS';
import STRINGS from '../constants/STRINGS';

const Stack = createNativeStackNavigator();

export default function ReportsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ReportsMain"
                component={ReportsScreen}
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