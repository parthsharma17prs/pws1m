import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography, borderRadius, shadows } from '../../theme';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { MOCK_INTERVIEWS } from '../../data/mockData';

const diffColor = { easy: colors.success, medium: colors.warning, hard: colors.error };

export const MockInterviewScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <Header title="Mock Interview" showBack onBack={() => navigation.goBack()} />
    <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

      {/* Hero */}
      <Card variant="purple" style={styles.hero}>
        <View style={styles.heroIcon}>
          <Ionicons name="videocam" size={32} color={colors.accentPurple} />
        </View>
        <Text style={styles.heroTitle}>Practice Makes Perfect</Text>
        <Text style={styles.heroSub}>Simulate real interviews with AI feedback</Text>
      </Card>

      {MOCK_INTERVIEWS.map((iv) => (
        <Card key={iv.id} style={styles.card}>
          <View style={styles.cardTop}>
            <View style={styles.iconCircle}>
              <Ionicons name="mic-outline" size={22} color={colors.primary} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>{iv.title}</Text>
              <Text style={styles.cardSub}>{iv.type} • {iv.duration} • {iv.questions.length} Qs</Text>
            </View>
            <View style={[styles.diffBadge, { backgroundColor: diffColor[iv.difficulty] + '20' }]}>
              <Text style={[styles.diffText, { color: diffColor[iv.difficulty] }]}>
                {iv.difficulty.toUpperCase()}
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.startBtn}>
            <Text style={styles.startText}>Start Interview</Text>
            <Ionicons name="arrow-forward" size={16} color={colors.white} />
          </TouchableOpacity>
        </Card>
      ))}

    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  scroll: { padding: spacing.lg, paddingBottom: 40 },

  hero: { alignItems: 'center', paddingVertical: 32, marginBottom: spacing.lg },
  heroIcon: {
    width: 64, height: 64, borderRadius: 32,
    backgroundColor: colors.white, justifyContent: 'center', alignItems: 'center', marginBottom: 12,
  },
  heroTitle: { ...typography.h3, color: colors.white, fontWeight: '700' },
  heroSub: { ...typography.caption, color: 'rgba(255,255,255,0.7)', marginTop: 4 },

  card: { marginBottom: spacing.md },
  cardTop: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 14 },
  iconCircle: {
    width: 44, height: 44, borderRadius: 14,
    backgroundColor: colors.primaryBg, justifyContent: 'center', alignItems: 'center',
  },
  cardTitle: { ...typography.bodyMedium, color: colors.dark, fontWeight: '700' },
  cardSub: { ...typography.small, color: colors.textLight, marginTop: 2 },
  diffBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: borderRadius.full },
  diffText: { ...typography.tiny, fontWeight: '700' },

  startBtn: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    backgroundColor: colors.primary, borderRadius: borderRadius.md,
    paddingVertical: 12, gap: 6,
  },
  startText: { ...typography.bodyMedium, color: colors.white, fontWeight: '700' },
});
