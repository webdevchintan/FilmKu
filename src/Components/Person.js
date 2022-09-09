import React from 'react';
import {Image, View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {theme} from '../theme';

const Person = ({id, name, character, profilePath, image}) => {
  return (
    <TouchableOpacity>
      <View style={{width: 80}}>
        <Image style={styles.imageStyle} source={image} resizeMode="cover" />
        <View>
          <Text
            style={{color: theme.colors.darkBlue, fontSize: 12, marginTop: 8}}
            numberOfLines={2}>
            {name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
});

export default Person;
