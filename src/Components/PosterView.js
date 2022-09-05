import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {Image_Path} from '../apis/constant';
import {images} from '../theme/images';

function PosterView(props) {
  const {item} = props;
  return (
    <View style={{margin:10}}>
      <Image
        source={{url: `${Image_Path}/${item?.poster_path}`}}
        style={styles.imageStyle}
      />
      <Text style={styles.nameLabel}>{item?.title}</Text>
      <View style={[styles.row, {marginLeft: 10}]}>
        <Image source={images.Star} style={styles.iconCenter} />
        <Text style={styles.rating}>{item?.vote_average} / 10 IMDb</Text>
      </View>
    </View>
  );
}

export default PosterView;

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 150,
    marginRight: 30,
    borderRadius: 10,
    marginLeft: 10,
  },
  nameLabel: {
    fontSize: 18,
    width: 150,
    marginLeft: 10,
    padding:10
  },
  row: {
    flexDirection: 'row',
  },
  iconCenter: {
    alignSelf: 'center',
  },
  rating: {
    color: 'grey',
    margin: 10,
  },
});
