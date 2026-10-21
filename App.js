import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

// Import RootStack Navigation หลัก
import RootStack from './navigation/RootStack';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* StatusBar ปรับแต่งสีข้อความส่วนบนของมือถือ */}
        <StatusBar style="light" backgroundColor="#0f172a" />
        
        {/* เรียกใช้ RootStack ซึ่งภายในจะซ้อน AppDrawer และ MainTabs ตามลำดับ */}
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}