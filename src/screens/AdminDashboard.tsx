import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography, borderRadius, shadows } from '../theme';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { PLATFORM_STATS, RECENT_ACTIVITY, MOCK_APPLICATIONS } from '../data/mockData';

/**
 * Admin Dashboard — platform statistics, mock charts, and recent activity.
 */
export const AdminDashboard = ({ navigation }: any) => {
  const stats = [
    { label: 'Students', value: PLATFORM_STATS.totalStudents, icon: 'school', color: colors.cardBlue },
    { label: 'Companies', value: PLATFORM_STATS.totalCompanies, icon: 'business', color: colors.cardOrange },
    { label: 'Applications', value: PLATFORM_STATS.totalApplications, icon: 'document-text', color: colors.cardPurple },
    { label: 'Success Rate', value: `${PLATFORM_STATS.successRate}%`, icon: 'trending-up', color: colors.cardGreen },
  ];

  return (
    <View style={styles.container}>
      <Header title="Admin Dashboard" />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* Stats grid */}
        <View style={styles.grid}>
          {stats.map((s) => (
            <View key={s.label} style={[styles.statCard, { backgroundColor: s.color }]}>
              <View style={styles.statIcon}>
                <Ionicons name={s.icon as any} size={22} color={s.color} />
              </View>
              <Text style={styles.statNum}>{s.value}</Text>
              <Text style={styles.statLabel}>{s.label}</Text>
            </View>
          ))}
        </View>

        {/* Mock chart card */}
        <Card style={styles.chartCard}>
          <Text style={styles.sectionTitle}>📊 Platform Statistics</Text>
          <View style={styles.chartBars}>
            {[60, 80, 45, 90, 70, 55, 85].map((h, i) => (
              <View key={i} style={styles.barCol}>
                <View style={[styles.bar, { height: h, backgroundColor: i === 3 ? colors.primary : colors.primaryBg }]} />
                <Text style={styles.barLabel}>{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}</Text>
              </View>
            ))}
          </View>
        </Card>

        {/* Recent activity */}
        <Text style={styles.sectionTitle}>⚡ Recent Activity</Text>
        {RECENT_ACTIVITY.map((a) => (
          <Card key={a.id} style={styles.actCard}>
            <View style={styles.actRow}>
              <View style={styles.actIcon}>
                <Ionicons name={a.icon as any} size={18} color={colors.primary} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.actAction}>{a.action}</Text>
                <Text style={styles.actName}>{a.name}</Text>
              </View>
              <Text style={styles.actTime}>{a.time}</Text>
            </View>
          </Card>
        ))}

        {/* Manage sections */}
        <Text style={[styles.sectionTitle, { marginTop: spacing.md }]}>🔧 Management</Text>
        <View style={styles.manageRow}>
          {[
            { label: 'Students', icon: 'people-outline', color: colors.cardBlue },
            { label: 'Companies', icon: 'business-outline', color: colors.cardOrange },
            { label: 'Settings', icon: 'settings-outline', color: colors.cardPurple },
          ].map((m) => (
            <View key={m.label} style={[styles.manageCard, { backgroundColor: m.color }]}>
              <View style={styles.manageIcon}>
                <Ionicons name={m.icon as any} size={24} color={m.color} />
              </View>
              <Text style={styles.manageLabel}>{m.label}</Text>
            </View>
          ))}
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  scroll: { padding: spacing.lg, paddingBottom: 40 },

  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, marginBottom: spacing.lg },
  statCard: {
    width: '48%', borderRadius: borderRadius.lg, padding: spacing.md,
    ...shadows.small,
  },
  statIcon: {
    width: 40, height: 40, borderRadius: 12,
    backgroundColor: colors.white, justifyContent: 'center', alignItems: 'center',
    marginBottom: spacing.sm,
  },
  statNum: { fontSize: 26, fontWeight: '800', color: colors.white },
  statLabel: { ...typography.small, color: 'rgba(255,255,255,0.7)', marginTop: 2 },

  chartCard: { marginBottom: spacing.lg },
  sectionTitle: { ...typography.h3, color: colors.dark, marginBottom: spacing.md },
  chartBars: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', height: 100 },
  barCol: { alignItems: 'center', flex: 1 },
  bar: { width: 16, borderRadius: 8 },
  barLabel: { ...typography.tiny, color: colors.textLight, marginTop: 6 },

  actCard: { marginBottom: spacing.xs, paddingVertical: spacing.md },
  actRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  actIcon: {
    width: 36, height: 36, borderRadius: 10,
    backgroundColor: colors.primaryBg, justifyContent: 'center', alignItems: 'center',
  },
  actAction: { ...typography.bodyMedium, color: colors.dark, fontWeight: '600' },
  actName: { ...typography.small, color: colors.textLight, marginTop: 1 },
  actTime: { ...typography.tiny, color: colors.textMuted },

  manageRow: { flexDirection: 'row', gap: spacing.sm },
  manageCard: {
    flex: 1, borderRadius: borderRadius.lg, padding: spacing.md,
    alignItems: 'center', ...shadows.small,
  },
  manageIcon: {
    width: 44, height: 44, borderRadius: 22,
    backgroundColor: colors.white, justifyContent: 'center', alignItems: 'center',
    marginBottom: spacing.sm,
  },
  manageLabel: { ...typography.small, color: colors.white, fontWeight: '700' },
});
