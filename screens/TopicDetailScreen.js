import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function TopicDetailScreen({ route, navigation }) {
  // รับค่า { item } ที่ส่งมาจากหน้าก่อนหน้า[cite: 1]
  const { item } = route.params || {};

  // กรณีไม่มีข้อมูลส่งมา (Fallback)
  if (!item) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>⚠️ ไม่พบข้อมูลรายละเอียด</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>ย้อนกลับ</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // รองรับฟิลด์รูปภาพแบบต่างๆ
  const imageSource = item.image || item.imageUrl;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.contentBox}>
        {/* 1. หมวดหมู่ (Category / Badge) */}
        {(item.category || item.role) && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {item.category || item.role || 'Lesson'}
            </Text>
          </View>
        )}

        {/* 2. ชื่อหัวข้อ (Topic / Title) */}
        <Text style={styles.title}>
          {item.topic || item.title || item.name || 'ไม่มีชื่อหัวข้อ'}
        </Text>

        {/* 3. รูปภาพประกอบ */}
        {imageSource && (
          <View style={styles.imageWrapper}>
            <Image
              source={
                typeof imageSource === 'string'
                  ? { uri: imageSource }
                  : imageSource
              }
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        )}

        {/* 4. คำอธิบายสรุป (Summary / Subtitle) */}
        {(item.summary || item.subtitle) && (
          <View style={styles.summaryBox}>
            <Text style={styles.summaryText}>
              💡 {item.summary || item.subtitle}
            </Text>
          </View>
        )}

        <View style={styles.divider} />

        {/* 5. แนวคิดหลัก (Concept / Detail) */}
        {(item.concept || item.detail) && (
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>📌 แนวคิดหลัก (Concept)</Text>
            <Text style={styles.detailText}>
              {item.concept || item.detail}
            </Text>
          </View>
        )}

        {/* 6. วัตถุประสงค์ (Purpose - อาร์เรย์) */}
        {item.purpose && Array.isArray(item.purpose) && item.purpose.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>🎯 วัตถุประสงค์ (Purpose)</Text>
            {item.purpose.map((p, index) => (
              <Text key={index} style={styles.bulletItem}>
                • {p}
              </Text>
            ))}
          </View>
        )}

        {/* 7. ตัวอย่างโค้ด (Code Example) */}
        {item.code_example && (
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>💻 ตัวอย่างโค้ด (Code Example)</Text>
            <View style={styles.codeBlock}>
              <Text style={styles.codeText}>{item.code_example}</Text>
            </View>
          </View>
        )}

        {/* 8. คำอธิบายเพิ่มเติม (Explanation) */}
        {item.explanation && (
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>📝 คำอธิบายโค้ด (Explanation)</Text>
            <Text style={styles.detailText}>{item.explanation}</Text>
          </View>
        )}

        {/* 9. การนำไปใช้งาน (Application) */}
        {item.application && (
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>🚀 การนำไปใช้งาน (Application)</Text>
            <Text style={styles.detailText}>{item.application}</Text>
          </View>
        )}

        {/* 10. คำค้นหาหลัก (Keywords) */}
        {item.keywords && Array.isArray(item.keywords) && item.keywords.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>🏷️ คำค้นหา (Keywords)</Text>
            <View style={styles.keywordContainer}>
              {item.keywords.map((kw, index) => (
                <View key={index} style={styles.keywordTag}>
                  <Text style={styles.keywordText}>#{kw}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* ปุ่มกดย้อนกลับ */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>← ย้อนกลับหน้าเดิม</Text>
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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8fafc',
  },
  emptyText: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 220,
    backgroundColor: '#cbd5e1',
  },
  contentBox: {
    padding: 20,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#e0f2fe',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 10,
  },
  badgeText: {
    color: '#0284c7',
    fontSize: 12,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 8,
    lineHeight: 28,
  },
  subtitle: {
    fontSize: 15,
    color: '#475569',
    lineHeight: 22,
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: '#e2e8f0',
    marginVertical: 16,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#334155',
    lineHeight: 22,
  },
  tasksContainer: {
    marginTop: 16,
    backgroundColor: '#ffffff',
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  taskItem: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 20,
    marginTop: 4,
  },
  button: {
    backgroundColor: '#0f172a',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  backButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});