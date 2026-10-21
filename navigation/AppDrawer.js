import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Import MainTabs และ Screens ที่อยู่ใน Drawer
import MainTabs from './MainTabs';
import HowToScreen from '../screens/HowToScreen';
import AboutProjectScreen from '../screens/AboutProjectScreen';

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="MainTabs"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0f172a',
        },
        headerTintColor: '#ffffff',
        drawerActiveTintColor: '#2563eb',
        drawerInactiveTintColor: '#64748b',
        drawerStyle: {
          backgroundColor: '#ffffff',
          width: 280,
        },
      }}
    >
      {/* เมนูที่ 1: MainTabs (เมนูหลักที่ข้างในมี Tab 4 เมนู) */}
      <Drawer.Screen
        name="MainTabs"
        component={MainTabs}
        options={{
          title: 'เมนูหลัก',
          headerTitle: 'Smart Content Hub',
        }}
      />

      {/* เมนูที่ 2: HowToScreen (คู่มือ) */}
      <Drawer.Screen
        name="HowTo"
        component={HowToScreen}
        options={{
          title: 'คู่มือการใช้งาน',
          headerTitle: 'คู่มือการใช้งาน (How To)',
        }}
      />

      {/* เมนูที่ 3: AboutProjectScreen (เกี่ยวกับ) */}
      <Drawer.Screen
        name="AboutProject"
        component={AboutProjectScreen}
        options={{
          title: 'เกี่ยวกับโปรเจกต์',
          headerTitle: 'เกี่ยวกับโปรเจกต์ (About Project)',
        }}
      />
    </Drawer.Navigator>
  );
}