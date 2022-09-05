import React from 'react';
import {View, Image, StyleSheet, Text, Pressable} from 'react-native';
import {images} from '../theme/images';

function Header(props) {
  return (
    <View style={styles.headerRow}>
      <Image source={images.Menu} style={styles.iconCenter} />
      <Text style={styles.headLabel}>FilmKu</Text>
      <View style={styles.headerRow}>
        <Pressable
          onPress={() => {
            props.props.navigation.navigate('SearchScreen');
          }}
          style={styles.iconCenter}>

          <Image source={images.Search} style={styles.SearchIcon} />
        </Pressable>
        <Image source={images.Notify} style={styles.iconCenter} />
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  iconCenter: {
    alignSelf: 'center',
  },
  headLabel: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
  },
  SearchIcon: {
    alignSelf: 'center',
    marginRight: 20,
    height: 20,
    width: 20,
  },
});
