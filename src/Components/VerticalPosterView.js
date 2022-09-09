import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Image_Path} from '../apis/constant';
import {theme} from '../theme';
import {images} from '../theme/images';

function VerticalPosterView(props) {
  const {item, handleOnPress} = props;
  return (
    <TouchableOpacity style={styles.mainView} onPress={handleOnPress}>
      <Image
        source={{uri: `${Image_Path}/${item?.poster_path}`}}
        style={styles.imageStyle}
      />

      <View style={[{paddingLeft: 20}]}>
        <Text style={styles.nameLabel}>{item?.title}</Text>
        <View style={styles.row}>
          <Image source={images.Star} style={styles.starIcon} />
          <Text style={styles.rating}>
            {item?.vote_average?.toFixed(2)} / 10 IMDb
          </Text>
        </View>
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
        <View style={styles.row}>
          <Image source={images.clock} style={styles.clockIcon} />
          <Text style={styles.timeText}>1h 47m</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default VerticalPosterView;

const styles = StyleSheet.create({
  mainView: {
    margin: 10,
    flexDirection: 'row',
  },
  imageStyle: {
    height: 128,
    width: 85,
    borderRadius: 10,
    marginLeft: 10,
  },
  nameLabel: {
    fontSize: 14,
    width: 150,
    fontWeight: 'bold',
    color: theme.colors.black,
  },
  row: {
    // marginVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  clockIcon: {
    height: 8,
    width: 8,
  },
  starIcon: {
    height: 12,
    width: 12,
  },
  rating: {
    color: theme.colors.grey,
    paddingLeft: 4,
    fontSize: 12,
    marginVertical: 8,
  },
  timeText: {
    color: theme.colors.grey,
    paddingLeft: 4,
    fontSize: 12,
    marginVertical: 8,
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 203,
  },
  genreBlockStyle: {
    backgroundColor: '#dce3fe',
    borderRadius: 18,
    paddingHorizontal: 12,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
    marginVertical: 2,
  },
  genreText: {
    color: '#707fa3',
    fontSize: 8,
  },
});
