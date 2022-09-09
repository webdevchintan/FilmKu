import React from 'react';
import {Text, StyleSheet, Image, View, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image_Path} from '../apis/constant';
import {theme} from '../theme';
import {images} from '../theme/images';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native-gesture-handler';
import Person from '../Components/Person';

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
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: theme.colors.white,
          paddingBottom: 40,
        }}>
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
          <View style={styles.descriptionContainer}>
            <Text style={styles.headingText}>Description</Text>
            <Text style={styles.movieDescription}>{overview}</Text>
          </View>
          <View style={styles.castContainer}>
            <View style={styles.castHeading}>
              <Text style={styles.headingText}>Cast</Text>
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
    </SafeAreaView>
  );
}

export default MovieDetailScreen;

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    tintColor: theme.colors.white,
  },
  imageContainer: {
    // backgroundColor: theme.colors.black,
    width: '100%',
    height: 300,
    // borderTopLeftRadius:20,
    // borderTopRightRadius:20
  },
  dotIcon: {
    position: 'absolute',
    top: 20,
    right: 10,
  },
  headerView: {
    position: 'absolute',
    top: 0,
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
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
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
  playInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  playInfoTitle: {
    fontWeight: '400',
    fontSize: 12,
    color: '#9C9C9C',
  },
  playInfoDesc: {
    fontWeight: '600',
    fontSize: 12,
    color: theme.colors.black,
    lineHeight: 16,
    marginTop: 4,
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
