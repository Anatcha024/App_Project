import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

// Import ข้อมูล topics
import topics from '../data/react_native_knowledge_24_topics';

export default function RNKnowledgeScreen({ navigation }) {
  const dataList = topics || [];

  const renderTopicItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => {
        // ส่ง { item } ไปยัง TopicDetailScreen[cite: 1]
        navigation.navigate('TopicDetail', { item });
      }}
    >
      <View style={styles.cardBadge}>
        <Text style={styles.cardBadgeText}>{item.category || 'Lesson'}</Text>
      </View>

      <View style={styles.imageWrapper}>
        <Image
          source={
            typeof item.image === 'string'
              ? { uri: item.image }
              : item.image
          }
          style={styles.topicImage}
          resizeMode="contain"
        />
      </View>

      {/* รองรับทั้ง item.topic หรือ item.title */}
      <Text style={styles.cardTitle}>{item.topic || item.title}</Text>
      
      {/* รองรับทั้ง item.summary, item.concept หรือ item.detail */}
      <Text style={styles.cardSubtitle} numberOfLines={2}>
        {item.summary || item.concept || item.detail || 'ไม่มีรายละเอียด'}
      </Text>

      <View style={styles.cardFooter}>
        <Text style={styles.readMoreText}>อ่านเนื้อหาบทเรียน →</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.headerTitle}>📚 RN Knowledge</Text>
        <Text style={styles.headerSubtitle}>
          คลังความรู้และบทเรียน React Native
        </Text>
      </View>

      <FlatList
        data={dataList}
        keyExtractor={(item, index) =>
          item.id ? item.id.toString() : index.toString()
        }
        renderItem={renderTopicItem}
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
    fontSize: 22,
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
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  cardBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#e0f2fe',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 8,
    marginBottom: 12,
  },
  cardBadgeText: {
    color: '#0284c7',
    fontSize: 12,
    fontWeight: 'bold',
  },
  // กรอบสำหรับจัดรูปภาพ
  imageWrapper: {
    width: '100%',
    height: 120,
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    marginBottom: 12,
    justify: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  topicImage: {
    width: '90%',
    height: '90%',
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
    marginBottom: 12,
  },
  cardFooter: {
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    paddingTop: 10,
    alignItems: 'flex-end',
  },
  readMoreText: {
    fontSize: 12,
    color: '#2563eb',
    fontWeight: '600',
  },
});