import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography, borderRadius } from '../../theme';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { MOCK_INTERVIEW_QUESTIONS } from '../../data/mockData';

const diffColor = { easy: colors.success, medium: colors.warning, hard: colors.error };
const catIcon: Record<string, any> = { Behavioral: 'people-outline', Technical: 'code-slash-outline', 'System Design': 'git-network-outline' };

export const InterviewQuestionsScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <Header title="Interview Questions" showBack onBack={() => navigation.goBack()} />
    <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

      {/* Filter chips */}
      <View style={styles.chipRow}>
        {['All', 'Behavioral', 'Technical'].map((c, i) => (
          <View key={c} style={[styles.chip, i === 0 && styles.chipActive]}>
            <Text style={[styles.chipText, i === 0 && styles.chipTextActive]}>{c}</Text>
          </View>
        ))}
      </View>

      {MOCK_INTERVIEW_QUESTIONS.map((q, idx) => (
        <Card key={q.id} style={styles.card}>
          <View style={styles.cardRow}>
            <View style={styles.numCircle}>
              <Text style={styles.numText}>{idx + 1}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.qText}>{q.question}</Text>
              <View style={styles.meta}>
                <View style={styles.catBadge}>
                  <Ionicons name={catIcon[q.category] ?? 'help-outline'} size={14} color={colors.primary} />
                  <Text style={styles.catText}>{q.category}</Text>
                </View>
                <View style={[styles.diffBadge, { backgroundColor: diffColor[q.difficulty] + '20' }]}>
                  <Text style={[styles.diffText, { color: diffColor[q.difficulty] }]}>
                    {q.difficulty.toUpperCase()}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Card>
      ))}

    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  scroll: { padding: spacing.lg, paddingBottom: 40 },

  chipRow: { flexDirection: 'row', gap: 8, marginBottom: spacing.lg },
  chip: { paddingHorizontal: 18, paddingVertical: 8, borderRadius: borderRadius.full, backgroundColor: colors.white },
  chipActive: { backgroundColor: colors.dark },
  chipText: { ...typography.small, color: colors.textLight, fontWeight: '600' },
  chipTextActive: { color: colors.white },

  card: { marginBottom: spacing.sm },
  cardRow: { flexDirection: 'row', gap: 14 },
  numCircle: {
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: colors.primaryBg, justifyContent: 'center', alignItems: 'center',
  },
  numText: { ...typography.bodyMedium, color: colors.primary, fontWeight: '800' },
  qText: { ...typography.body, color: colors.text, marginBottom: 8 },
  meta: { flexDirection: 'row', gap: 8 },
  catBadge: {
    flexDirection: 'row', alignItems: 'center', gap: 4,
    backgroundColor: colors.primaryBg, paddingHorizontal: 10, paddingVertical: 3,
    borderRadius: borderRadius.full,
  },
  catText: { ...typography.tiny, color: colors.primary },
  diffBadge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: borderRadius.full },
  diffText: { ...typography.tiny, fontWeight: '700' },
});
