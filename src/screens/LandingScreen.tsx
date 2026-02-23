import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { Button } from '../components/Button';
import { colors, spacing, typography } from '../theme';
import { Ionicons } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

/**
 * Full-screen landing page with animated floating dots background,
 * centered branding, and a large "Get Started" CTA.
 */
export const LandingScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <AnimatedBackground />

      <View style={styles.content}>
        {/* Logo / Brand area */}
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <Ionicons name="rocket-outline" size={44} color={colors.white} />
          </View>
        </View>

        <Text style={styles.title}>ANTI</Text>
        <Text style={styles.subtitle}>Your Career Growth Platform</Text>
        <Text style={styles.description}>
          AI-powered tools to land your dream job — resumes, interviews, and more.
        </Text>

        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Auth')}
          size="large"
          variant="primary"
          style={styles.cta}
          icon={<Ionicons name="arrow-forward" size={20} color={colors.white} />}
        />

        <Text style={styles.version}>v1.0.0 • Built with ❤️</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.primaryLight },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },
  logoContainer: { marginBottom: spacing.lg },
  logoCircle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primaryDark,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  title: {
    ...typography.h1,
    fontSize: 56,
    color: colors.dark,
    letterSpacing: 6,
    marginBottom: spacing.xs,
  },
  subtitle: {
    ...typography.h3,
    color: colors.dark,
    opacity: 0.75,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  description: {
    ...typography.body,
    color: colors.dark,
    opacity: 0.55,
    textAlign: 'center',
    marginBottom: spacing.xxl,
    maxWidth: 300,
  },
  cta: { minWidth: 220 },
  version: {
    position: 'absolute',
    bottom: 40,
    ...typography.small,
    color: colors.dark,
    opacity: 0.35,
  },
});
