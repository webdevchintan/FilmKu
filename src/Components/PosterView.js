import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Image_Path} from '../apis/constant';
import {theme} from '../theme';
import {images} from '../theme/images';

function PosterView(props) {
  const {item, handleOnPress} = props;
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <Image
        source={{
          uri: `${Image_Path}/${item?.poster_path}`,
          headers: {
            Accept: '*/*',
          },
        }}
        resizeMode="cover"
        style={styles.imageStyle}
      />
      <Text style={styles.nameLabel}>{item?.title}</Text>
      <View style={[styles.row, {marginLeft: 10}]}>
        <Image source={images.Star} style={styles.iconCenter} />
        <Text style={styles.rating}>{item?.vote_average} / 10 IMDb</Text>
      </View>
    </TouchableOpacity>
  );
}

export default PosterView;

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 150,
    borderRadius: 10,
    marginLeft: 15,
  },
  nameLabel: {
    fontSize: 14,
    width: 150,
    marginLeft: 10,
    paddingVertical: 8,
    color: theme.colors.black,
  },
  row: {
    flexDirection: 'row',
  },
  iconCenter: {
    alignSelf: 'center',
  },
  rating: {
    color: theme.colors.grey,
    fontSize: 12,
    paddingLeft: 3,
  },
});
