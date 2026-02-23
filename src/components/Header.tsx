import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography, borderRadius } from '../theme';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  transparent?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ title, showBack, onBack, transparent }) => {
  const { user, logout } = useAuth();
  const bg = transparent ? 'transparent' : colors.primary;
  const fg = transparent ? colors.dark : colors.white;
  const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight ?? 0 : 0;

  return (
    <View style={[styles.header, { backgroundColor: bg, paddingTop: statusBarHeight + spacing.md }]}>
      <View style={styles.left}>
        {showBack && onBack && (
          <TouchableOpacity onPress={onBack} style={styles.iconBtn}>
            <Ionicons name="arrow-back" size={22} color={fg} />
          </TouchableOpacity>
        )}
        {title && <Text style={[styles.title, { color: fg }]}>{title}</Text>}
      </View>
      {user && (
        <TouchableOpacity onPress={logout} style={[styles.logoutBtn, { borderColor: fg }]}>
          <Ionicons name="log-out-outline" size={18} color={fg} />
          <Text style={[styles.logoutText, { color: fg }]}>Logout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
  },
  left: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  iconBtn: { marginRight: spacing.md, padding: 4 },
  title: { ...typography.h3, fontWeight: '700' },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: borderRadius.full,
    paddingHorizontal: 14,
    paddingVertical: 6,
    gap: 6,
  },
  logoutText: { fontSize: 13, fontWeight: '600' },
});
