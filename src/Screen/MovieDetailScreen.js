import React from 'react';
import {Text, StyleSheet, Image, View, Pressable} from 'react-native';
import {Image_Path} from '../apis/constant';
import {theme} from '../theme';
import {images} from '../theme/images';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native-gesture-handler';
import Person from '../Components/Person';
import {GenreList} from '../Components/GenreList';
import {PlayInfo} from '../Components/PlayInfo';
import {HeadingLabel} from '../Components/HeadingLabel';

function MovieDetailScreen({navigation, route}) {
  const {params} = route;
  const {details} = params;
  const {title, poster_path, vote_average, overview} = details;

  function HeaderBack() {
    return (
      <Pressable
        style={styles.headerView}
        onPress={() => {
          navigation.goBack();
        }}>
        <Image source={images.back} style={styles.backButton} />
      </Pressable>
    );
  }
  const playTrailer = () => {
    return (
      <View style={styles.playTrailer}>
        <Icon name="play-circle-fill" size={60} color={theme.colors.white} />
        <Text style={styles.playTrailerText}>Play Trailer</Text>
      </View>
    );
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View>
        <Image
          source={{
            uri: `${Image_Path}/${poster_path}`,
          }}
          style={styles.imageContainer}
          resizeMode="cover"
        />
        <HeaderBack />
        <View style={styles.dotIcon}>
          <Icon name="menu" size={20} color={theme.colors.white} />
        </View>
        {playTrailer()}
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.headerInfo}>
          <Text style={styles.movieTitle}>{title}</Text>
          <Icon name="bookmark-outline" size={24} color="#D8D8D8" />
        </View>
        <View style={styles.ratingContainer}>
          <Image source={images.Star} style={styles.iconCenter} />
          <Text style={styles.ratingText}>{vote_average} / 10 IMDb</Text>
        </View>
        <GenreList />
        <PlayInfo />
        <View style={styles.descriptionContainer}>
          <HeadingLabel label="Description" />
          <Text style={styles.movieDescription}>{overview}</Text>
        </View>
        <View style={styles.castContainer}>
          <View style={styles.castHeading}>
            <HeadingLabel label="Cast" />
            <View style={styles.seeMoreBlockStyle}>
              <Text style={styles.seeMoreText}>See more</Text>
            </View>
          </View>
          <View style={styles.castList}>
            <Person id="1" name="Tom Holland" image={images.user1} />
            <Person id="2" name="Zendaya" image={images.user2} />
            <Person id="3" name="Benedict Cumberbatch" image={images.user3} />
            <Person id="4" name="Jacon Batalon" image={images.user4} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default MovieDetailScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: theme.colors.white,
    paddingBottom: 40,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    tintColor: theme.colors.white,
  },
  imageContainer: {
    width: '100%',
    height: 300,
  },
  dotIcon: {
    position: 'absolute',
    top: 20,
    right: 10,
  },
  headerView: {
    position: 'absolute',
    top: 0,
    zIndex: 999,
    width: 50,
    height: 50,
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 25,
    color: theme.colors.black,
    width: 230,
  },
  headerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoContainer: {
    height: '100%',
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -50,
    padding: 24,
  },
  ratingText: {
    color: theme.colors.grey,
    fontSize: 12,
    paddingLeft: 3,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.black,
  },

  descriptionContainer: {
    marginVertical: 24,
  },
  headingText: {
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 20,
    color: '#110E47',
  },
  movieDescription: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 22,
    color: '#9C9C9C',
    marginTop: 8,
  },
  playTrailer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: '30%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playTrailerText: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 15,
    color: theme.colors.white,
    marginTop: 5,
  },
  castContainer: {
    // marginVertical:24,
  },
  castHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seeMoreBlockStyle: {
    // width: 100,
    padding: 5,
    borderWidth: 1,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.lightGray,
  },
  seeMoreText: {
    fontSize: 16,
    color: theme.colors.darkBlue,
    fontWeight: '400',
  },
  castNameText: {
    fontSize: 16,
    color: theme.colors.darkBlue,
    fontWeight: '400',
  },
  castList: {
    flexDirection: 'row',
    marginTop: 15,
  },
});
