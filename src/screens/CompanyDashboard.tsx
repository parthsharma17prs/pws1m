import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography, borderRadius, shadows } from '../theme';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { MOCK_APPLICATIONS, MOCK_JOBS } from '../data/mockData';

/**
 * Company Dashboard — applicants overview, job stats, and recent applications list.
 */
export const CompanyDashboard = ({ navigation }: any) => {
  const activeJobs = MOCK_JOBS.filter((j) => j.status === 'active').length;

  return (
    <View style={styles.container}>
      <Header title="Company Dashboard" />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* Stats row */}
        <View style={styles.statsRow}>
          <Card variant="blue" style={styles.statCard}>
            <Ionicons name="people" size={24} color={colors.white} />
            <Text style={styles.statNum}>{MOCK_APPLICATIONS.length}</Text>
            <Text style={styles.statLabel}>Applicants</Text>
          </Card>
          <Card variant="orange" style={styles.statCard}>
            <Ionicons name="briefcase" size={24} color={colors.white} />
            <Text style={styles.statNum}>{activeJobs}</Text>
            <Text style={styles.statLabel}>Active Jobs</Text>
          </Card>
        </View>

        {/* JD Status */}
        <Text style={styles.sectionTitle}>📋 JD Status</Text>
        {MOCK_JOBS.slice(0, 3).map((job) => (
          <Card key={job.id} style={styles.jobCard}>
            <View style={styles.jobRow}>
              <View style={styles.jobIcon}>
                <Ionicons name="document-text-outline" size={20} color={colors.primary} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.jobTitle}>{job.title}</Text>
                <Text style={styles.jobSub}>{job.type} • {job.location}</Text>
              </View>
              <View style={[styles.statusDot, { backgroundColor: job.status === 'active' ? colors.success : colors.textLight }]} />
            </View>
          </Card>
        ))}

        {/* Recent Applications */}
        <Text style={styles.sectionTitle}>👥 Recent Applications</Text>
        {MOCK_APPLICATIONS.map((app) => {
          const job = MOCK_JOBS.find((j) => j.id === app.jobId);
          return (
            <Card key={app.id} style={styles.appCard}>
              <View style={styles.appRow}>
                <View style={styles.avatar}>
                  <Ionicons name="person" size={18} color={colors.primary} />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.appName}>{app.studentName}</Text>
                  <Text style={styles.appJob}>Applied for {job?.title ?? ''}</Text>
                </View>
                <View style={styles.scoreBadge}>
                  <Text style={styles.scoreText}>{app.atsScore}%</Text>
                </View>
              </View>
              <View style={styles.appActions}>
                <TouchableOpacity style={styles.actionBtn}>
                  <Ionicons name="document-outline" size={16} color={colors.primary} />
                  <Text style={styles.actionText}>View Resume</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionBtn, styles.actionBtnFilled]}>
                  <Ionicons name="checkmark" size={16} color={colors.white} />
                  <Text style={[styles.actionText, { color: colors.white }]}>Shortlist</Text>
                </TouchableOpacity>
              </View>
            </Card>
          );
        })}

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  scroll: { padding: spacing.lg, paddingBottom: 40 },

  statsRow: { flexDirection: 'row', gap: spacing.md, marginBottom: spacing.lg },
  statCard: { flex: 1, alignItems: 'center', paddingVertical: spacing.lg },
  statNum: { fontSize: 32, fontWeight: '800', color: colors.white, marginVertical: 4 },
  statLabel: { ...typography.small, color: 'rgba(255,255,255,0.7)' },

  sectionTitle: { ...typography.h3, color: colors.dark, marginBottom: spacing.md },

  jobCard: { marginBottom: spacing.sm },
  jobRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  jobIcon: {
    width: 40, height: 40, borderRadius: 12,
    backgroundColor: colors.primaryBg, justifyContent: 'center', alignItems: 'center',
  },
  jobTitle: { ...typography.bodyMedium, color: colors.dark, fontWeight: '700' },
  jobSub: { ...typography.small, color: colors.textLight, marginTop: 2 },
  statusDot: { width: 10, height: 10, borderRadius: 5 },

  appCard: { marginBottom: spacing.sm },
  appRow: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 12 },
  avatar: {
    width: 40, height: 40, borderRadius: 20,
    backgroundColor: colors.primaryBg, justifyContent: 'center', alignItems: 'center',
  },
  appName: { ...typography.bodyMedium, color: colors.dark, fontWeight: '700' },
  appJob: { ...typography.small, color: colors.textLight, marginTop: 2 },
  scoreBadge: {
    backgroundColor: colors.primaryBg, paddingHorizontal: 10, paddingVertical: 4,
    borderRadius: borderRadius.full,
  },
  scoreText: { ...typography.small, color: colors.primary, fontWeight: '700' },

  appActions: { flexDirection: 'row', gap: spacing.sm },
  actionBtn: {
    flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    gap: 6, paddingVertical: 10, borderRadius: borderRadius.md,
    borderWidth: 1.5, borderColor: colors.primary,
  },
  actionBtnFilled: { backgroundColor: colors.primary, borderColor: colors.primary },
  actionText: { ...typography.small, color: colors.primary, fontWeight: '600' },
});
