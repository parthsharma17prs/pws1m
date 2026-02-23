// Theme configuration — modern blue/purple learning platform aesthetic
export const colors = {
  primary: '#6C8CE0',
  primaryLight: '#8BA7E8',
  primaryDark: '#4A6BC4',
  primaryBg: '#E8EDF8',
  background: '#F0F2F8',
  secondary: '#F5F1E8',
  surface: '#FFFFFF',
  accent: '#FF6B9D',
  accentOrange: '#FF9F43',
  accentPurple: '#A855F7',
  accentGreen: '#4ADE80',
  accentPink: '#F472B6',
  accentTeal: '#2DD4BF',
  cardBlue: '#8BA7E8',
  cardPurple: '#CE93D8',
  cardPink: '#F8BBD0',
  cardOrange: '#FFB74D',
  cardGreen: '#A5D6A7',
  dark: '#1A1A2E',
  text: '#2D2D44',
  textLight: '#8E8EA0',
  textMuted: '#B0B0C0',
  white: '#FFFFFF',
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
  border: '#E5E7EB',
  cardBg: '#FFFFFF',
  shadow: 'rgba(108,140,224,0.15)',
  overlay: 'rgba(26,26,46,0.5)',
};

export const spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 48 };

export const borderRadius = { sm: 8, md: 12, lg: 20, xl: 28, full: 9999 };

export const typography = {
  h1: { fontSize: 34, fontWeight: '800' as const, letterSpacing: -0.5 },
  h2: { fontSize: 26, fontWeight: '700' as const, letterSpacing: -0.3 },
  h3: { fontSize: 20, fontWeight: '600' as const },
  body: { fontSize: 16, fontWeight: '400' as const, lineHeight: 24 },
  bodyMedium: { fontSize: 16, fontWeight: '500' as const, lineHeight: 24 },
  caption: { fontSize: 14, fontWeight: '400' as const, lineHeight: 20 },
  small: { fontSize: 12, fontWeight: '500' as const, lineHeight: 16 },
  tiny: { fontSize: 10, fontWeight: '600' as const, letterSpacing: 0.5 },
};

export const shadows = {
  small: { shadowColor: '#6C8CE0', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.08, shadowRadius: 8, elevation: 2 },
  medium: { shadowColor: '#6C8CE0', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.12, shadowRadius: 16, elevation: 4 },
  large: { shadowColor: '#6C8CE0', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.16, shadowRadius: 24, elevation: 8 },
};
