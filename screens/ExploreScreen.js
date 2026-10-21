import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';

// ⚠️ เปลี่ยนเป็น URL GitHub Raw ของกลุ่มคุณ
const GITHUB_JSON_URL =
  'https://github.com/Anatcha024/App_Project.git';

export default function ExploreScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ฟังก์ชันดึงข้อมูลแบบ Online จาก GitHub JSON
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(GITHUB_JSON_URL);

      if (!response.ok) {
        throw new Error('ไม่สามารถเชื่อมต่อหรือดึงข้อมูลจาก GitHub ได้');
      }

      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err.message || 'เกิดข้อผิดพลาดในการโหลดข้อมูล');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // การ์ดแสดงผลแต่ละรายการ
  const renderExploreItem = ({ item }) => {
    const imageUrl = item.image || item.imageUrl;

    return (
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => {
          // ส่ง { item } ทั้งก้อนไปยัง TopicDetailScreen ตามหลัก SoC
          navigation.navigate('TopicDetail', { item });
        }}
      >
        <View style={styles.cardBadge}>
          <Text style={styles.cardBadgeText}>
            {item.category || 'Online Data'}
          </Text>
        </View>

        {imageUrl && (
          <View style={styles.imageWrapper}>
            <Image
              source={{ uri: imageUrl }}
              style={styles.topicImage}
              resizeMode="contain"
            />
          </View>
        )}

        <Text style={styles.cardTitle}>
          {item.topic || item.title || item.name}
        </Text>

        <Text style={styles.cardSubtitle} numberOfLines={2}>
          {item.summary || item.concept || item.detail || 'ไม่มีคำอธิบาย'}
        </Text>

        <View style={styles.cardFooter}>
          <Text style={styles.readMoreText}>อ่านรายละเอียดเพิ่มเติม →</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // 1. สถานะ Loading (ขณะกำลังดึงข้อมูล)
  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#2563eb" />
        <Text style={styles.statusText}>กำลังโหลดข้อมูลเรื่องที่น่าสนใจ...</Text>
      </View>
    );
  }

  // 2. สถานะ Error (เมื่อดึงข้อมูลไม่สำเร็จ)
  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorIcon}>⚠️</Text>
        <Text style={styles.errorTitle}>เกิดข้อผิดพลาดในการโหลดข้อมูล</Text>
        <Text style={styles.statusText}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={fetchData}>
          <Text style={styles.retryButtonText}>🔄 ลองใหม่อีกครั้ง</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // 3. แสดงผลรายการข้อมูลจริง
  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.headerTitle}>🌐 Explore Showcase (DATA 3)</Text>
        <Text style={styles.headerSubtitle}>
          ข้อมูลเรื่องที่กลุ่มสนใจ ดึงข้อมูลแบบ Online จาก GitHub JSON
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item, index) =>
          item.id ? item.id.toString() : index.toString()
        }
        renderItem={renderExploreItem}
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
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
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
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 160,
    backgroundColor: '#e2e8f0',
  },
  cardContent: {
    padding: 16,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#fef3c7',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginBottom: 8,
  },
  badgeText: {
    color: '#d97706',
    fontSize: 11,
    fontWeight: 'bold',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 6,
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#64748b',
    lineHeight: 18,
    marginBottom: 10,
  },
  cardFooter: {
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    paddingTop: 8,
    alignItems: 'flex-end',
  },
  detailLink: {
    fontSize: 12,
    color: '#2563eb',
    fontWeight: '600',
  },
  statusText: {
    marginTop: 12,
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
  },
  errorIcon: {
    fontSize: 40,
    marginBottom: 8,
  },
  errorTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ef4444',
  },
  retryButton: {
    marginTop: 16,
    backgroundColor: '#2563eb',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});