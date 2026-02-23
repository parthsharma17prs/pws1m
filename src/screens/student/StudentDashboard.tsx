import React, { useRef, useEffect } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography, borderRadius, shadows } from '../../theme';
import { useAuth } from '../../context/AuthContext';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - spacing.lg * 2 - spacing.md) / 2;

// Feature cards grid data
const features = [
  { key: 'ResumeAnalyzer', title: 'AI Resume\nAnalyzer', icon: 'document-text-outline', bg: colors.cardBlue },
  { key: 'AICalling', title: 'AI\nCalling', icon: 'call-outline', bg: colors.cardPurple },
  { key: 'MockInterview', title: 'Mock\nInterview', icon: 'videocam-outline', bg: colors.cardOrange },
  { key: 'InterviewQuestions', title: 'Interview\nQuestions', icon: 'help-circle-outline', bg: colors.cardPink },
  { key: 'AppliedJobs', title: 'Applied\nJobs', icon: 'briefcase-outline', bg: colors.cardGreen },
  { key: 'ATSScore', title: 'ATS Score\nViewer', icon: 'analytics-outline', bg: '#B2DFDB' },
];

/**
 * Student Dashboard — greeting banner + 6 feature cards in a 2-col grid.
 * Inspired by the reference "Hello, Roam / Level Up" design.
 */
export const StudentDashboard = ({ navigation }: any) => {
  const { user } = useAuth();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Dashboard" />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Animated.View style={{ opacity: fadeAnim }}>

          {/* Greeting Banner */}
          <Card style={styles.banner} variant="blue">
            <View style={styles.bannerLeft}>
              <View style={styles.avatarCircle}>
                <Ionicons name="person" size={28} color={colors.primary} />
              </View>
              <View>
                <Text style={styles.greeting}>Hello, {user?.name ?? 'Student'} 👋</Text>
                <Text style={styles.level}>{user?.level ?? 'Level Up'}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.notifBtn}>
              <Ionicons name="notifications-outline" size={22} color={colors.white} />
              <View style={styles.notifDot} />
            </TouchableOpacity>
          </Card>

          {/* Week day chips */}
          <View style={styles.dayRow}>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d, i) => {
              const today = new Date().getDay() === i;
              return (
                <View key={d} style={[styles.dayChip, today && styles.dayChipActive]}>
                  <Text style={[styles.dayText, today && styles.dayTextActive]}>{d}</Text>
                </View>
              );
            })}
          </View>

          {/* Section header */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My Courses</Text>
            <TouchableOpacity>
              <Ionicons name="search-outline" size={22} color={colors.textLight} />
            </TouchableOpacity>
          </View>

          {/* Feature Grid */}
          <View style={styles.grid}>
            {features.map((f, i) => (
              <TouchableOpacity
                key={f.key}
                style={[styles.featureCard, { backgroundColor: f.bg }]}
                activeOpacity={0.8}
                onPress={() => navigation.navigate(f.key)}
              >
                <View style={styles.featureIconWrap}>
                  <Ionicons name={f.icon as any} size={28} color={colors.white} />
                </View>
                <Text style={styles.featureTitle}>{f.title}</Text>
                <View style={styles.featureArrow}>
                  <Ionicons name="arrow-forward-circle" size={26} color="rgba(255,255,255,0.6)" />
                </View>
              </TouchableOpacity>
            ))}
          </View>

        </Animated.View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  scroll: { padding: spacing.lg, paddingBottom: 40 },

  // Banner
  banner: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    marginBottom: spacing.lg, padding: spacing.lg,
  },
  bannerLeft: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  avatarCircle: {
    width: 50, height: 50, borderRadius: 25,
    backgroundColor: colors.white, justifyContent: 'center', alignItems: 'center',
  },
  greeting: { ...typography.bodyMedium, color: colors.white, fontWeight: '700' },
  level: { ...typography.small, color: 'rgba(255,255,255,0.7)', marginTop: 2 },
  notifBtn: { position: 'relative' },
  notifDot: {
    position: 'absolute', top: -2, right: -2,
    width: 8, height: 8, borderRadius: 4, backgroundColor: colors.error,
  },

  // Day chips
  dayRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: spacing.lg },
  dayChip: {
    paddingVertical: 8, paddingHorizontal: 10, borderRadius: borderRadius.sm,
    backgroundColor: colors.white,
  },
  dayChipActive: { backgroundColor: colors.dark },
  dayText: { ...typography.tiny, color: colors.textLight },
  dayTextActive: { color: colors.white },

  // Section
  sectionHeader: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    marginBottom: spacing.md,
  },
  sectionTitle: { ...typography.h3, color: colors.dark },

  // Grid
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md },
  featureCard: {
    width: CARD_WIDTH, height: CARD_WIDTH * 1.05,
    borderRadius: borderRadius.lg, padding: spacing.md,
    justifyContent: 'space-between',
    ...shadows.small,
  },
  featureIconWrap: {
    width: 48, height: 48, borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.25)',
    justifyContent: 'center', alignItems: 'center',
  },
  featureTitle: { ...typography.bodyMedium, color: colors.white, fontWeight: '700' },
  featureArrow: { alignSelf: 'flex-end' },
});
