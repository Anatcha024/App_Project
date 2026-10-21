import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, } from 'react-native';

export default function HowToScreen({ navigation }) {
  const guideSteps = [
    {
      id: '1',
      title: '1. การใช้งาน Navigation & Drawer Menu',
      detail:
        'ผู้ใช้สามารถกดไอคอนเมนูมุมซ้ายบนเพื่อเปิด Drawer Menu สำหรับสลับไปหน้า "คู่มือการใช้งาน" หรือ "เกี่ยวกับโปรเจกต์" ได้ตลอดเวลา',
    },
    {
      id: '2',
      title: '2. การใช้งาน Main Tabs (4 เมนูหลัก)',
      detail:
        'แถบด้านล่างรองรับ 4 เมนูหลัก ได้แก่ Dashboard (หน้าหลัก), Teamwork (ข้อมูลผู้พัฒนา DATA 1), RN Knowledge (บทเรียน 24 หัวข้อ DATA 2) และ Explore (ดึงข้อมูล GitHub DATA 3)',
    },
    {
      id: '3',
      title: '3. การเข้าดูรายละเอียด Topic Detail',
      detail:
        'สามารถคลิกเลือกรายการ Card หรือ List ในหน้าใดก็ได้ ระบบจะทำการส่ง Object { item } ทั้งก้อนไปยังหน้า TopicDetailScreen เพื่อแสดงรายละเอียดเชิงลึกโดยไม่ต้องโหลดใหม่',
    },
    {
      id: '4',
      title: '4. การโหลดข้อมูลภายนอก (Online Fetch)',
      detail:
        'ในหน้า Explore ระบบจะทำการดึงข้อมูลผ่าน GitHub Raw JSON แบบเรียลไทม์ โดยมีระบบแสดง Loading และ Error State หากการเชื่อมต่อมีปัญหา[cite: 2]',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.headerBox}>
        <Text style={styles.headerTitle}>📖 คู่มือการใช้งาน (How To)</Text>
        <Text style={styles.headerSubtitle}>
          แนะนำวิธีการใช้งานแอปพลิเคชัน Smart Content Hub และโครงสร้างการทำงาน
        </Text>
      </View>

      {/* Guide Content */}
      <View style={styles.contentContainer}>
        {guideSteps.map((step) => (
          <View key={step.id} style={styles.card}>
            <Text style={styles.cardTitle}>{step.title}</Text>
            <Text style={styles.cardDetail}>{step.detail}</Text>
          </View>
        ))}

        {/* ปุ่มลัดกลับหน้าหลัก */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('MainTabs')}
        >
          <Text style={styles.buttonText}>กลับสู่หน้าหลัก (Dashboard)</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  headerBox: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 6,
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#64748b',
    lineHeight: 18,
  },
  contentContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 6,
  },
  cardDetail: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});