import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography, borderRadius } from '../../theme';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { MOCK_APPLICATIONS, MOCK_JOBS } from '../../data/mockData';

const statusStyle: Record<string, { bg: string; fg: string }> = {
  pending: { bg: '#FFF3E0', fg: colors.warning },
  reviewed: { bg: '#E3F2FD', fg: colors.info },
  shortlisted: { bg: '#E8F5E9', fg: colors.success },
  rejected: { bg: '#FFEBEE', fg: colors.error },
};

export const AppliedJobsScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <Header title="Applied Jobs" showBack onBack={() => navigation.goBack()} />
    <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

      <View style={styles.statsRow}>
        {[
          { label: 'Total', value: MOCK_APPLICATIONS.length, color: colors.primary },
          { label: 'Shortlisted', value: MOCK_APPLICATIONS.filter(a => a.status === 'shortlisted').length, color: colors.success },
          { label: 'Pending', value: MOCK_APPLICATIONS.filter(a => a.status === 'pending').length, color: colors.warning },
        ].map((s) => (
          <Card key={s.label} style={styles.statCard}>
            <Text style={[styles.statNum, { color: s.color }]}>{s.value}</Text>
            <Text style={styles.statLabel}>{s.label}</Text>
          </Card>
        ))}
      </View>

      {MOCK_APPLICATIONS.map((app) => {
        const job = MOCK_JOBS.find((j) => j.id === app.jobId);
        const st = statusStyle[app.status];
        return (
          <Card key={app.id} style={styles.card}>
            <View style={styles.cardRow}>
              <View style={styles.companyCircle}>
                <Ionicons name="business" size={20} color={colors.primary} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.jobTitle}>{job?.title ?? 'Unknown'}</Text>
                <Text style={styles.company}>{job?.company} • {job?.location}</Text>
              </View>
              <View style={[styles.statusBadge, { backgroundColor: st.bg }]}>
                <Text style={[styles.statusText, { color: st.fg }]}>{app.status.toUpperCase()}</Text>
              </View>
            </View>
            <View style={styles.cardMeta}>
              <Text style={styles.metaText}>📅 Applied {app.appliedDate}</Text>
              <Text style={styles.metaText}>📊 ATS {app.atsScore}%</Text>
            </View>
          </Card>
        );
      })}

    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  scroll: { padding: spacing.lg, paddingBottom: 40 },

  statsRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.lg },
  statCard: { flex: 1, alignItems: 'center', paddingVertical: spacing.md },
  statNum: { fontSize: 28, fontWeight: '800' },
  statLabel: { ...typography.small, color: colors.textLight, marginTop: 2 },

  card: { marginBottom: spacing.sm },
  cardRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  companyCircle: {
    width: 42, height: 42, borderRadius: 12,
    backgroundColor: colors.primaryBg, justifyContent: 'center', alignItems: 'center',
  },
  jobTitle: { ...typography.bodyMedium, color: colors.dark, fontWeight: '700' },
  company: { ...typography.small, color: colors.textLight, marginTop: 2 },
  statusBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: borderRadius.full },
  statusText: { ...typography.tiny, fontWeight: '700' },

  cardMeta: { flexDirection: 'row', gap: spacing.lg, marginTop: spacing.sm },
  metaText: { ...typography.small, color: colors.textLight },
});
