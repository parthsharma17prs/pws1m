import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, ViewStyle } from 'react-native';
import { colors, borderRadius, spacing, typography } from '../theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  title, onPress, variant = 'primary', size = 'medium',
  loading = false, disabled = false, style, icon,
}) => {
  const bgMap = {
    primary: colors.dark,
    secondary: colors.primary,
    outline: 'transparent',
    accent: colors.accentOrange,
  };
  const textColorMap = {
    primary: colors.white,
    secondary: colors.white,
    outline: colors.dark,
    accent: colors.white,
  };
  const padMap = {
    small: { paddingVertical: 10, paddingHorizontal: 18 },
    medium: { paddingVertical: 14, paddingHorizontal: 28 },
    large: { paddingVertical: 18, paddingHorizontal: 40 },
  };
  const fontMap = { small: 14, medium: 16, large: 18 };

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      disabled={disabled || loading}
      onPress={onPress}
      style={[
        styles.base,
        { backgroundColor: bgMap[variant] },
        variant === 'outline' && styles.outlineBorder,
        padMap[size],
        disabled && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={textColorMap[variant]} />
      ) : (
        <>
          {icon}
          <Text style={[styles.text, { color: textColorMap[variant], fontSize: fontMap[size] }]}>
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.lg,
    gap: spacing.sm,
  },
  outlineBorder: { borderWidth: 2, borderColor: colors.dark },
  disabled: { opacity: 0.45 },
  text: { fontWeight: '700' },
});
