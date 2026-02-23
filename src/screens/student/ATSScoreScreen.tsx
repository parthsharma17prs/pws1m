import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography, borderRadius, shadows } from '../../theme';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { MOCK_RESUME } from '../../data/mockData';

export const ATSScoreScreen = ({ navigation }: any) => {
  const r = MOCK_RESUME;
  return (
    <View style={styles.container}>
      <Header title="ATS Score Viewer" showBack onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* Big score */}
        <Card variant="blue" style={styles.scoreCard}>
          <View style={styles.ring}>
            <Text style={styles.scoreNum}>{r.atsScore}</Text>
          </View>
          <Text style={styles.scoreLabel}>Your ATS Score</Text>
          <View style={styles.tipRow}>
            <Ionicons name="trending-up" size={16} color="rgba(255,255,255,0.8)" />
            <Text style={styles.tipText}>+5 since last upload</Text>
          </View>
        </Card>

        {/* Strengths */}
        <Text style={styles.sectionTitle}>✅ Strengths</Text>
        {r.analysis.strengths.map((s, i) => (
          <Card key={i} style={styles.listCard}>
            <View style={styles.listRow}>
              <Ionicons name="checkmark-circle" size={20} color={colors.success} />
              <Text style={styles.listText}>{s}</Text>
            </View>
          </Card>
        ))}

        {/* Improvements */}
        <Text style={[styles.sectionTitle, { marginTop: spacing.md }]}>🔧 Areas to Improve</Text>
        {r.analysis.improvements.map((s, i) => (
          <Card key={i} style={styles.listCard}>
            <View style={styles.listRow}>
              <Ionicons name="alert-circle" size={20} color={colors.warning} />
              <Text style={styles.listText}>{s}</Text>
            </View>
          </Card>
        ))}

        {/* Keywords */}
        <Text style={[styles.sectionTitle, { marginTop: spacing.md }]}>🔑 Keywords</Text>
        <View style={styles.chipWrap}>
          {r.analysis.keywords.map((k) => (
            <View key={k} style={styles.chip}>
              <Text style={styles.chipText}>{k}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.uploadBtn}>
          <Ionicons name="cloud-upload-outline" size={20} color={colors.white} />
          <Text style={styles.uploadText}>Upload New Resume</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  scroll: { padding: spacing.lg, paddingBottom: 40 },

  scoreCard: { alignItems: 'center', paddingVertical: 36, marginBottom: spacing.lg },
  ring: {
    width: 120, height: 120, borderRadius: 60,
    borderWidth: 6, borderColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center', alignItems: 'center', marginBottom: 12,
  },
  scoreNum: { fontSize: 48, fontWeight: '900', color: colors.white },
  scoreLabel: { ...typography.bodyMedium, color: colors.white, fontWeight: '700' },
  tipRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 8 },
  tipText: { ...typography.small, color: 'rgba(255,255,255,0.7)' },

  sectionTitle: { ...typography.h3, color: colors.dark, marginBottom: spacing.sm },

  listCard: { marginBottom: spacing.xs, paddingVertical: spacing.md },
  listRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 10 },
  listText: { ...typography.body, color: colors.text, flex: 1 },

  chipWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: spacing.lg },
  chip: {
    backgroundColor: colors.primaryBg, paddingHorizontal: 14, paddingVertical: 6,
    borderRadius: borderRadius.full,
  },
  chipText: { ...typography.small, color: colors.primary, fontWeight: '600' },

  uploadBtn: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    backgroundColor: colors.primary, borderRadius: borderRadius.lg,
    paddingVertical: 16, gap: 8, ...shadows.medium,
  },
  uploadText: { ...typography.bodyMedium, color: colors.white, fontWeight: '700' },
});
