import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {theme} from '../theme';

export const GenreList = () => {
  return (
    <View style={styles.genreContainer}>
      <View style={styles.genreBlockStyle}>
        <Text style={styles.genreText}>HORROR</Text>
      </View>
      <View style={[styles.genreBlockStyle]}>
        <Text style={styles.genreText}>MYSTERY</Text>
      </View>
      <View style={styles.genreBlockStyle}>
        <Text style={styles.genreText}>THRILLER</Text>
      </View>
      <View style={styles.genreBlockStyle}>
        <Text style={styles.genreText}>THRILLER</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
  },
  genreBlockStyle: {
    backgroundColor: theme.colors.lavender,
    borderRadius: 18,
    paddingHorizontal: 12,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
    marginVertical: 2,
  },
  genreText: {
    color: theme.colors.portage,
    fontSize: 8,
  },
});
