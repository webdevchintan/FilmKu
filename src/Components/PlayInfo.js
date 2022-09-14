import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {theme} from '../theme';

export const PlayInfo = () => {
  return (
    <View style={styles.playInfoContainer}>
      <View>
        <Text style={styles.playInfoTitle}>Length</Text>
        <Text style={styles.playInfoDesc}>2h 28min</Text>
      </View>
      <View>
        <Text style={styles.playInfoTitle}>Language</Text>
        <Text style={styles.playInfoDesc}>English</Text>
      </View>
      <View>
        <Text style={styles.playInfoTitle}>Rating</Text>
        <Text style={styles.playInfoDesc}>PG-13</Text>
      </View>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  playInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  playInfoTitle: {
    fontWeight: '400',
    fontSize: 12,
    color: theme.colors.dustGray,
  },
  playInfoDesc: {
    fontWeight: '600',
    fontSize: 12,
    color: theme.colors.black,
    lineHeight: 16,
    marginTop: 4,
  },
});
