import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Navigation หลัก และ Screens
import AppDrawer from './AppDrawer';
import TopicDetailScreen from '../screens/TopicDetailScreen';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="AppDrawer" 
        component={AppDrawer} //   component ต้องไม่ใช่ undefined
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="TopicDetail" 
        component={TopicDetailScreen} 
      />
    </Stack.Navigator>
  );
}