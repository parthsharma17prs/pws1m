import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';
import { colors } from '../theme';

const { width, height } = Dimensions.get('window');
const DOT_COUNT = 35;

/**
 * Animated floating dots background — pure RN, no native GL dependency.
 * Creates gentle drifting dots like the reference design.
 */
export const AnimatedBackground: React.FC = () => {
  const dots = useRef(
    Array.from({ length: DOT_COUNT }, () => ({
      x: new Animated.Value(Math.random() * width),
      y: new Animated.Value(Math.random() * height),
      opacity: new Animated.Value(Math.random() * 0.5 + 0.15),
      size: Math.random() * 8 + 3,
      color: ['#8BA7E8', '#CE93D8', '#FFB74D', '#A5D6A7', '#F8BBD0'][
        Math.floor(Math.random() * 5)
      ],
    }))
  ).current;

  useEffect(() => {
    dots.forEach((dot) => {
      const animateAxis = (anim: Animated.Value, range: number) => {
        const to = Math.random() * range;
        Animated.timing(anim, {
          toValue: to,
          duration: 4000 + Math.random() * 6000,
          useNativeDriver: false,
        }).start(() => animateAxis(anim, range));
      };

      const animateOpacity = () => {
        Animated.sequence([
          Animated.timing(dot.opacity, { toValue: Math.random() * 0.4 + 0.1, duration: 3000 + Math.random() * 3000, useNativeDriver: false }),
          Animated.timing(dot.opacity, { toValue: Math.random() * 0.6 + 0.2, duration: 3000 + Math.random() * 3000, useNativeDriver: false }),
        ]).start(() => animateOpacity());
      };

      animateAxis(dot.x, width);
      animateAxis(dot.y, height);
      animateOpacity();
    });
  }, []);

  return (
    <View style={styles.container} pointerEvents="none">
      {dots.map((dot, i) => (
        <Animated.View
          key={i}
          style={[
            styles.dot,
            {
              width: dot.size,
              height: dot.size,
              borderRadius: dot.size / 2,
              backgroundColor: dot.color,
              opacity: dot.opacity,
              transform: [
                { translateX: dot.x },
                { translateY: dot.y },
              ],
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { ...StyleSheet.absoluteFillObject, overflow: 'hidden' },
  dot: { position: 'absolute' },
});
