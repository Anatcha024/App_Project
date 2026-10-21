import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function AboutProjectScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* 1. Header & Project Name */}
      <View style={styles.headerCard}>
        <Text style={styles.projectBadge}>PROJECT INFOGRAPHIC</Text>
        <Text style={styles.projectTitle}>SMART CONTENT HUB</Text>
        <Text style={styles.projectSubtitle}>
          แอปพลิเคชันรวมศูนย์ข้อมูล 3 รูปแบบ สำหรับการเรียนรู้และนำเสนอข้อมูล[cite: 2]
        </Text>
      </View>

      {/* 2. รายละเอียดวัตถุประสงค์โจทย์ */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>📌 วัตถุประสงค์และโจทย์โปรเจกต์</Text>
        <Text style={styles.paragraph}>
          พัฒนาแอปพลิเคชันด้วย React Native ที่สามารถจัดการและนำเสนอข้อมูลได้ 3 รูปแบบหลัก ได้แก่ ข้อมูลสมาชิกกลุ่ม (Local Code), บทเรียน React Native 24 หัวข้อ (Local Import) และข้อมูลเรื่องที่น่าสนใจแบบ Online จาก GitHub JSON[cite: 2]
        </Text>
      </View>

      {/* 3. โครงสร้างและหลักการออกแบบ SoC */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>🏗️ SoC: Separation of Concerns</Text>
        <Text style={styles.paragraph}>
          โปรเจกต์นี้ได้รับการออกแบบตามหลัก Separation of Concerns โดยแบ่งแยกส่วนการทำงานและหน้าที่ของไฟล์อย่างชัดเจน เพื่อให้ซอร์สโค้ดอ่านง่าย และดูแลรักษาง่าย[cite: 1]:
        </Text>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>
            • <Text style={styles.boldText}>Navigation:</Text> จัดการเส้นทางการนำทางหลักด้วย RootStack, AppDrawer (3 เมนู) และ MainTabs (4 เมนู)
          </Text>
          <Text style={styles.bulletItem}>
            • <Text style={styles.boldText}>Screens:</Text> แยกไฟล์การแสดงผลของแต่ละหน้าจอออกจากกันอย่างชัดเจน[cite: 1]
          </Text>
          <Text style={styles.bulletItem}>
            • <Text style={styles.boldText}>Data:</Text> แยกไฟล์จัดการข้อมูล (Local & Online Fetch) ออกจาก UI Components
          </Text>
        </View>
      </View>

      {/* 4. สรุปข้อมูลการพัฒนา */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>ℹ️ ข้อมูลการส่งงาน</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>ประเภทงาน:</Text>
          <Text style={styles.infoValue}>งานกลุ่ม 3 คน (ปริญญาตรี)[cite: 2]</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>การนำเสนอ:</Text>
          <Text style={styles.infoValue}>พฤหัสบดี 22 ต.ค. 2569[cite: 2]</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>สิ่งนำส่ง:</Text>
          <Text style={styles.infoValue}>APK + Source Code + Paper Presentation[cite: 2]</Text>
        </View>
      </View>

      {/* ปุ่มทางลัดไปยังเมนูหลัก */}
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('MainTabs')}
      >
        <Text style={styles.buttonText}>ไปยังหน้าหลัก (Dashboard)</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 16,
  },
  headerCard: {
    backgroundColor: '#0f172a',
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
    alignItems: 'center',
  },
  projectBadge: {
    color: '#38bdf8',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 6,
  },
  projectTitle: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  projectSubtitle: {
    color: '#94a3b8',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
  },
  sectionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 20,
  },
  bulletList: {
    marginTop: 8,
  },
  bulletItem: {
    fontSize: 13,
    color: '#334155',
    lineHeight: 22,
    marginBottom: 4,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#0f172a',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  infoLabel: {
    fontSize: 13,
    color: '#64748b',
    fontWeight: '500',
  },
  infoValue: {
    fontSize: 13,
    color: '#0f172a',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 24,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});