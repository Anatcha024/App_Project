import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import หน้า Screens ทั้ง 4 หน้าสำหรับ Tab
import HomeScreen from '../screens/HomeScreen';
import TeamworkScreen from '../screens/TeamworkScreen';
import RNKnowledgeScreen from '../screens/RNKnowledgeScreen';
import ExploreScreen from '../screens/ExploreScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false, // ซ่อน Header ของ Tab เพื่อใช้ Header จาก Drawer
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: '#64748b',
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
      }}
    >
      {/* Tab ที่ 1: HomeScreen (Dashboard) */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Dashboard',
        }}
      />

      {/* Tab ที่ 2: TeamworkScreen (DATA 1 - สมาชิกในกลุ่ม) */}
      <Tab.Screen
        name="Teamwork"
        component={TeamworkScreen}
        options={{
          tabBarLabel: 'Teamwork',
        }}
      />

      {/* Tab ที่ 3: RNKnowledgeScreen (DATA 2 - บทเรียน RN 24 หัวข้อ) */}
      <Tab.Screen
        name="RNKnowledge"
        component={RNKnowledgeScreen}
        options={{
          tabBarLabel: 'RN Knowledge',
        }}
      />

      {/* Tab ที่ 4: ExploreScreen (DATA 3 - ข้อมูล Online JSON จาก GitHub) */}
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
        }}
      />
    </Tab.Navigator>
  );
}