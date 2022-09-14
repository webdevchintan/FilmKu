import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {theme} from '../theme';

export const HeadingLabel = ({label, style}) => (
  <Text style={{...styles.headLabel, ...style}}>{label}</Text>
);

const styles = StyleSheet.create({
  headLabel: {
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 20,
    marginBottom: 10,
    color: theme.colors.darkBlue,
    letterSpacing: 0.2,
  },
});
