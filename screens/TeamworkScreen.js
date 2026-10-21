import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, } from 'react-native';

// ==========================================
// DATA 1: ข้อมูลสมาชิกกลุ่ม / บทบาท / หน้าที่
// ( Local: เขียนข้อมูลไว้ใน Code ตามโจทย์ )
// ==========================================
const teamMembersData = [
  {
    id: '1',
    title: 'นางสาววนัสวี อินทร์หอม',
    subtitle: '368305221020',
    role: 'พรีเซ็นแอปพลิเคชัน',
  },
  {
    id: '2',
    title: 'นางสาวอณัฐชา ธูปแจ้ง',
    subtitle: '368305221024',
    role: 'ออกแบบแอปพลิเคชัน',
  },
];

export default function TeamworkScreen({ navigation }) {
  // ฟังก์ชัน render การ์ดสมาชิกแต่ละคน
  const renderMemberItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => {
        // ส่ง Object ของรายการที่เลือกทั้งก้อน { item } ไปยัง TopicDetailScreen
        navigation.navigate('TopicDetail', { item });
      }}
    >
      <View style={styles.cardHeader}>
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarText}>{item.title.charAt(0)}</Text>
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.memberName}>{item.title}</Text>
          <Text style={styles.memberRole}>{item.role}</Text>
        </View>
      </View>

      <Text style={styles.memberSubtitle} numberOfLines={2}>
        {item.subtitle}
      </Text>

    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.headerTitle}>👥 ทีมสมาชิก</Text>
        <Text style={styles.headerSubtitle}>
          ข้อมูลสมาชิกกลุ่ม/ บทบาท / หน้าที
        </Text>
      </View>

      <FlatList
        data={teamMembersData}
        keyExtractor={(item) => item.id}
        renderItem={renderMemberItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  headerBox: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#64748b',
  },
  listContent: {
    padding: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#2563eb',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerTextContainer: {
    flex: 1,
  },
  memberName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  memberRole: {
    fontSize: 12,
    color: '#2563eb',
    fontWeight: '600',
  },
  memberSubtitle: {
    fontSize: 13,
    color: '#475569',
    marginBottom: 12,
    lineHeight: 18,
  },
  footerRow: {
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    paddingTop: 10,
    alignItems: 'flex-end',
  },
  detailLink: {
    fontSize: 12,
    color: '#0284c7',
    fontWeight: '600',
  },
});