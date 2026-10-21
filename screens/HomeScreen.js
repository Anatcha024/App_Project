import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, } from 'react-native';

export default function HomeScreen({ navigation }) {
  // ข้อมูลจำลองไฮไลท์สำหรับ Quick Cards
  const quickHighlights = [
    {
      id: '1',
      title: ' React Native Knowledge',
      subtitle: '24 บทเรียนเรียนรู้พื้นฐานถึงระดับสูง',
      targetTab: 'RNKnowledge',
    },
    {
      id: '2',
      title: ' Explore Showcase',
      subtitle: 'ข้อมูลหัวข้อที่น่าสนใจดึงตรงจาก GitHub Raw',
      targetTab: 'Explore',
    },
    {
      id: '3',
      title: ' Teamwork & Members',
      subtitle: 'แนะนำสมาชิกผู้พัฒนาแอปและบทบาทหน้าที่',
      targetTab: 'Teamwork',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* 1. Home Banner */}
      <View style={styles.bannerContainer}>
        <Text style={styles.bannerTitle}>SMART CONTENT HUB</Text>
        <Text style={styles.bannerSubtitle}>
          ศูนย์รวมข้อมูลและบทเรียน React Native ครบวงจร
        </Text>
      </View>

      {/* 2. Quick Menu */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}> Quick Menu (เมนูด่วน)</Text>
        <View style={styles.quickMenuGrid}>
          <TouchableOpacity
            style={[styles.quickMenuItem, { backgroundColor: '#e0f2fe' }]}
            onPress={() => navigation.navigate('RNKnowledge')}
          >
            <Text style={styles.quickMenuText}> RN Knowledge</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.quickMenuItem, { backgroundColor: '#fef3c7' }]}
            onPress={() => navigation.navigate('Explore')}
          >
            <Text style={styles.quickMenuText}> Explore</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.quickMenuItem, { backgroundColor: '#dcfce7' }]}
            onPress={() => navigation.navigate('Teamwork')}
          >
            <Text style={styles.quickMenuText}> Teamwork</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.quickMenuItem, { backgroundColor: '#f3e8ff' }]}
            onPress={() => navigation.navigate('HowTo')}
          >
            <Text style={styles.quickMenuText}> คู่มือการใช้งาน</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 3. Highlight Cards จากข้อมูลจริง */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}> ไฮไลท์เนื้อหาในแอป</Text>
        {quickHighlights.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            activeOpacity={0.7}
            onPress={() => navigation.navigate(item.targetTab)}
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
            <Text style={styles.cardLink}>เข้าชมเนื้อหา →</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  bannerContainer: {
    backgroundColor: '#0f172a',
    padding: 24,
    borderRadius: 16,
    margin: 16,
    alignItems: 'center',
  },
  bannerTitle: {
    color: '#38bdf8',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  bannerSubtitle: {
    color: '#94a3b8',
    fontSize: 14,
    textAlign: 'center',
  },
  sectionContainer: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 12,
  },
  quickMenuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickMenuItem: {
    width: '48%',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: 'center',
  },
  quickMenuText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#64748b',
    marginBottom: 8,
  },
  cardLink: {
    fontSize: 12,
    color: '#2563eb',
    fontWeight: '600',
  },
});