import React, { useState, useRef, useEffect } from 'react';
import {
  View, Text, TextInput, StyleSheet, ScrollView,
  TouchableOpacity, Animated, KeyboardAvoidingView, Platform, Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography, borderRadius, shadows } from '../theme';
import { useAuth } from '../context/AuthContext';
import { DEMO_USERS } from '../data/mockData';

/**
 * Auth screen — Face Detection (mock), Password login, and Demo quick-login cards.
 */
export const AuthScreen = ({ navigation }: any) => {
  const { login, isLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [faceScanning, setFaceScanning] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 600, useNativeDriver: true }),
    ]).start();
  }, []);

  const handleFaceLogin = () => {
    setFaceScanning(true);
    // Mock face detection — auto-logs in as student after 2s
    setTimeout(() => {
      setFaceScanning(false);
      login(DEMO_USERS[0]);
    }, 2000);
  };

  const handlePasswordLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }
    const user = DEMO_USERS.find((u) => u.email === email);
    if (user) {
      login(user);
    } else {
      Alert.alert('Error', 'Invalid credentials. Use a demo account.');
    }
  };

  const demoCards: { label: string; role: string; color: string; icon: any; idx: number }[] = [
    { label: 'Student', role: 'student', color: colors.cardBlue, icon: 'school-outline', idx: 0 },
    { label: 'Admin', role: 'admin', color: colors.cardPurple, icon: 'shield-checkmark-outline', idx: 2 },
    { label: 'Company', role: 'company', color: colors.cardOrange, icon: 'business-outline', idx: 1 },
  ];

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>

          {/* Back button */}
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={24} color={colors.dark} />
          </TouchableOpacity>

          <Text style={styles.heading}>Welcome Back 👋</Text>
          <Text style={styles.subheading}>Choose how you'd like to sign in</Text>

          {/* Face Detection Card */}
          <TouchableOpacity
            style={[styles.faceCard, faceScanning && styles.faceCardActive]}
            onPress={handleFaceLogin}
            activeOpacity={0.8}
          >
            <View style={styles.faceIcon}>
              <Ionicons
                name={faceScanning ? 'scan-outline' : 'camera-outline'}
                size={32}
                color={colors.white}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.faceTitle}>
                {faceScanning ? 'Scanning face...' : 'Face Detection Login'}
              </Text>
              <Text style={styles.faceSubtitle}>Quick & secure login with your face</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.white} />
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or sign in with email</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Email */}
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color={colors.textLight} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Email address"
              placeholderTextColor={colors.textMuted}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Password */}
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color={colors.textLight} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={colors.textMuted}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={20} color={colors.textLight} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.loginBtn}
            onPress={handlePasswordLogin}
            activeOpacity={0.8}
          >
            <Text style={styles.loginBtnText}>Sign In</Text>
          </TouchableOpacity>

          {/* Demo accounts */}
          <Text style={styles.demoTitle}>Quick Demo Login</Text>
          <View style={styles.demoRow}>
            {demoCards.map((d) => (
              <TouchableOpacity
                key={d.role}
                style={[styles.demoCard, { backgroundColor: d.color }]}
                onPress={() => login(DEMO_USERS[d.idx])}
                activeOpacity={0.8}
              >
                <View style={styles.demoIconCircle}>
                  <Ionicons name={d.icon} size={22} color={d.color} />
                </View>
                <Text style={styles.demoLabel}>{d.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

        </Animated.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  scroll: { padding: spacing.lg, paddingTop: 60 },
  backBtn: {
    width: 44, height: 44, borderRadius: 22,
    backgroundColor: colors.white,
    justifyContent: 'center', alignItems: 'center',
    marginBottom: spacing.lg,
    ...shadows.small,
  },
  heading: { ...typography.h1, color: colors.dark, marginBottom: spacing.xs },
  subheading: { ...typography.body, color: colors.textLight, marginBottom: spacing.xl },

  // Face Card
  faceCard: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: colors.primary, borderRadius: borderRadius.lg,
    padding: spacing.lg, marginBottom: spacing.lg, ...shadows.medium,
  },
  faceCardActive: { backgroundColor: colors.accentPurple },
  faceIcon: {
    width: 56, height: 56, borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center', alignItems: 'center', marginRight: spacing.md,
  },
  faceTitle: { ...typography.bodyMedium, color: colors.white, fontWeight: '700' },
  faceSubtitle: { ...typography.small, color: 'rgba(255,255,255,0.7)', marginTop: 2 },

  // Divider
  divider: { flexDirection: 'row', alignItems: 'center', marginVertical: spacing.lg },
  dividerLine: { flex: 1, height: 1, backgroundColor: colors.border },
  dividerText: { marginHorizontal: spacing.md, ...typography.small, color: colors.textLight },

  // Inputs
  inputContainer: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: colors.white, borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md, marginBottom: spacing.md,
    borderWidth: 1.5, borderColor: colors.border, height: 56,
  },
  inputIcon: { marginRight: spacing.sm },
  input: { flex: 1, ...typography.body, color: colors.text },

  // Login button
  loginBtn: {
    backgroundColor: colors.dark, borderRadius: borderRadius.lg,
    paddingVertical: 16, alignItems: 'center', marginTop: spacing.sm, marginBottom: spacing.xl,
    ...shadows.medium,
  },
  loginBtnText: { ...typography.bodyMedium, color: colors.white, fontWeight: '700' },

  // Demo section
  demoTitle: { ...typography.caption, color: colors.textLight, textAlign: 'center', marginBottom: spacing.md },
  demoRow: { flexDirection: 'row', justifyContent: 'space-between', gap: spacing.sm },
  demoCard: {
    flex: 1, borderRadius: borderRadius.lg, padding: spacing.md,
    alignItems: 'center', ...shadows.small,
  },
  demoIconCircle: {
    width: 44, height: 44, borderRadius: 22,
    backgroundColor: colors.white, justifyContent: 'center', alignItems: 'center',
    marginBottom: spacing.sm,
  },
  demoLabel: { ...typography.small, color: colors.white, fontWeight: '700' },
});
