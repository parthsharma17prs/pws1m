import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { colors, borderRadius, spacing, shadows } from '../theme';

interface CardProps {
  children: ReactNode;
  style?: ViewStyle;
  variant?: 'default' | 'blue' | 'purple' | 'orange' | 'pink' | 'green';
}

const bgMap = {
  default: colors.cardBg,
  blue: colors.cardBlue,
  purple: colors.cardPurple,
  orange: colors.cardOrange,
  pink: colors.cardPink,
  green: colors.cardGreen,
};

export const Card: React.FC<CardProps> = ({ children, style, variant = 'default' }) => (
  <View style={[styles.card, { backgroundColor: bgMap[variant] }, style]}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    ...shadows.medium,
  },
});
