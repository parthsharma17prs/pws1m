import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography, borderRadius, shadows } from '../../theme';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';

/**
 * AI Calling screen — voice assistant mock UI inspired by the reference AI Assistant screen.
 */
export const AICallingScreen = ({ navigation }: any) => {
  const [calling, setCalling] = useState(false);

  return (
    <View style={styles.container}>
      <Header title="AI Assistant" showBack onBack={() => navigation.goBack()} />
      <View style={styles.body}>

        {/* AI avatar */}
        <View style={styles.avatarWrap}>
          <View style={[styles.avatarRing, calling && styles.avatarRingActive]}>
            <Ionicons name="sparkles" size={48} color={colors.primary} />
          </View>
          {calling && <Text style={styles.listeningText}>Listening...</Text>}
        </View>

        {/* Chat bubble */}
        <View style={styles.bubble}>
          <Text style={styles.bubbleText}>
            {calling ? '🎙️ I\'m listening. Ask me anything about your career!' : 'Hi! How can I help you?'}
          </Text>
        </View>

        {/* Action buttons */}
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionBtn}>
            <Ionicons name="camera-outline" size={24} color={colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.micBtn, calling && styles.micBtnActive]}
            onPress={() => setCalling(!calling)}
          >
            <Ionicons name={calling ? 'stop' : 'mic'} size={30} color={colors.white} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}>
            <Ionicons name="scan-outline" size={24} color={colors.primary} />
          </TouchableOpacity>
        </View>

        <Text style={styles.prompts}>16 prompts left  •  Powered by AI</Text>

        {/* Quick actions */}
        <Card style={styles.quickCard}>
          <Text style={styles.quickTitle}>Quick Actions</Text>
          {[
            { icon: 'document-text-outline', label: 'Review my resume' },
            { icon: 'school-outline', label: 'Practice interview questions' },
            { icon: 'trending-up-outline', label: 'Career growth tips' },
            { icon: 'briefcase-outline', label: 'Job search strategy' },
          ].map((q) => (
            <TouchableOpacity key={q.label} style={styles.quickItem}>
              <Ionicons name={q.icon as any} size={20} color={colors.primary} />
              <Text style={styles.quickLabel}>{q.label}</Text>
              <Ionicons name="chevron-forward" size={16} color={colors.textLight} />
            </TouchableOpacity>
          ))}
        </Card>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  body: { flex: 1, alignItems: 'center', padding: spacing.lg },

  avatarWrap: { alignItems: 'center', marginBottom: spacing.lg },
  avatarRing: {
    width: 110, height: 110, borderRadius: 55,
    backgroundColor: colors.primaryBg,
    borderWidth: 3, borderColor: colors.primary,
    justifyContent: 'center', alignItems: 'center',
  },
  avatarRingActive: { borderColor: colors.accentPurple, backgroundColor: '#F3E8FF' },
  listeningText: { ...typography.caption, color: colors.accentPurple, marginTop: 8 },

  bubble: {
    backgroundColor: colors.primary, borderRadius: borderRadius.lg,
    paddingHorizontal: spacing.lg, paddingVertical: spacing.md,
    marginBottom: spacing.xl, maxWidth: '80%',
  },
  bubbleText: { ...typography.body, color: colors.white },

  actionRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.lg, marginBottom: spacing.md },
  actionBtn: {
    width: 52, height: 52, borderRadius: 26,
    backgroundColor: colors.white, justifyContent: 'center', alignItems: 'center',
    ...shadows.small,
  },
  micBtn: {
    width: 68, height: 68, borderRadius: 34,
    backgroundColor: colors.primary, justifyContent: 'center', alignItems: 'center',
    ...shadows.medium,
  },
  micBtnActive: { backgroundColor: colors.error },

  prompts: { ...typography.small, color: colors.textLight, marginBottom: spacing.lg },

  quickCard: { width: '100%' },
  quickTitle: { ...typography.bodyMedium, color: colors.dark, fontWeight: '700', marginBottom: spacing.md },
  quickItem: {
    flexDirection: 'row', alignItems: 'center', gap: 10,
    paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: colors.border,
  },
  quickLabel: { ...typography.body, color: colors.text, flex: 1 },
});
