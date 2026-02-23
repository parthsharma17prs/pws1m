import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography, borderRadius, shadows } from '../../theme';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { MOCK_RESUME } from '../../data/mockData';

/**
 * AI Resume Analyzer — ATS score circle, strengths/improvements, keywords.
 */
export const ResumeAnalyzerScreen = ({ navigation }: any) => {
  const r = MOCK_RESUME;

  return (
    <View style={styles.container}>
      <Header title="AI Resume Analyzer" showBack onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* Score card */}
        <Card style={styles.scoreCard} variant="blue">
          <View style={styles.scoreCircle}>
            <Text style={styles.scoreNum}>{r.atsScore}</Text>
            <Text style={styles.scoreLabel}>/ 100</Text>
          </View>
          <Text style={styles.scoreTitle}>ATS Compatibility Score</Text>
          <Text style={styles.scoreFile}>📄 {r.fileName}</Text>
        </Card>

        {/* Breakdown bars */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Score Breakdown</Text>
          {[
            { label: 'Keywords Match', pct: 85, color: colors.primary },
            { label: 'Formatting', pct: 90, color: colors.accentGreen },
            { label: 'Experience', pct: 75, color: colors.accentOrange },
            { label: 'Skills Match', pct: 80, color: colors.accentPurple },
          ].map((b) => (
            <View key={b.label} style={styles.barRow}>
              <Text style={styles.barLabel}>{b.label}</Text>
              <View style={styles.barTrack}>
                <View style={[styles.barFill, { width: `${b.pct}%`, backgroundColor: b.color }]} />
              </View>
              <Text style={styles.barPct}>{b.pct}%</Text>
            </View>
          ))}
        </Card>

        {/* Strengths */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>✅ Strengths</Text>
          {r.analysis.strengths.map((s, i) => (
            <View key={i} style={styles.listItem}>
              <Ionicons name="checkmark-circle" size={18} color={colors.success} />
              <Text style={styles.listText}>{s}</Text>
            </View>
          ))}
        </Card>

        {/* Improvements */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>🔧 Improvements</Text>
          {r.analysis.improvements.map((s, i) => (
            <View key={i} style={styles.listItem}>
              <Ionicons name="alert-circle" size={18} color={colors.warning} />
              <Text style={styles.listText}>{s}</Text>
            </View>
          ))}
        </Card>

        {/* Keywords */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>🔑 Detected Keywords</Text>
          <View style={styles.chipRow}>
            {r.analysis.keywords.map((k) => (
              <View key={k} style={styles.chip}>
                <Text style={styles.chipText}>{k}</Text>
              </View>
            ))}
          </View>
        </Card>

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
  scoreCircle: {
    width: 120, height: 120, borderRadius: 60,
    borderWidth: 6, borderColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center', alignItems: 'center', marginBottom: spacing.md,
  },
  scoreNum: { fontSize: 44, fontWeight: '800', color: colors.white },
  scoreLabel: { fontSize: 16, color: 'rgba(255,255,255,0.7)', marginTop: -4 },
  scoreTitle: { ...typography.bodyMedium, color: colors.white, fontWeight: '700' },
  scoreFile: { ...typography.small, color: 'rgba(255,255,255,0.6)', marginTop: 4 },

  section: { marginBottom: spacing.md },
  sectionTitle: { ...typography.h3, color: colors.dark, marginBottom: spacing.md },

  barRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  barLabel: { ...typography.caption, color: colors.text, width: 110 },
  barTrack: { flex: 1, height: 8, borderRadius: 4, backgroundColor: '#E8EDF8', marginHorizontal: 8 },
  barFill: { height: 8, borderRadius: 4 },
  barPct: { ...typography.small, color: colors.textLight, width: 36, textAlign: 'right' },

  listItem: { flexDirection: 'row', alignItems: 'flex-start', gap: 8, marginBottom: 10 },
  listText: { ...typography.body, color: colors.text, flex: 1 },

  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: {
    backgroundColor: colors.primaryBg, paddingHorizontal: 14, paddingVertical: 6,
    borderRadius: borderRadius.full,
  },
  chipText: { ...typography.small, color: colors.primary, fontWeight: '600' },

  uploadBtn: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    backgroundColor: colors.primary, borderRadius: borderRadius.lg,
    paddingVertical: 16, gap: 8, marginTop: spacing.md,
    ...shadows.medium,
  },
  uploadText: { ...typography.bodyMedium, color: colors.white, fontWeight: '700' },
});
