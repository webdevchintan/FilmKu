import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {getTrendingMovieList} from '../services';
import Header from '../Components/Header';
import PosterView from '../Components/PosterView';
import VerticalPosterView from '../Components/VerticalPosterView';
import {theme} from '../theme';
import {useSelector} from 'react-redux';
import {HeadingLabel} from '../Components/HeadingLabel';

function Dashboard(props) {
  const trendingList = useSelector(state => state.movie.trendingList);

  const navigation = useNavigation();
  useEffect(() => {
    getTrendingMovieList();
  }, []);

  const onPosterPress = details => {
    navigation.navigate('MovieDetailScreen', {details});
  };
  function renderTrendingMoives() {
    return (
      <View>
        <HeadingLabel label="Now Showing" style={styles.labelStyle} />
        <FlatList
          data={trendingList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <PosterView
                item={item}
                handleOnPress={() => onPosterPress(item)}
              />
            );
          }}
        />
      </View>
    );
  }

  function renderPopularMovies() {
    return (
      <View>
        <HeadingLabel label="Popular" style={styles.labelStyle} />
        <FlatList
          data={trendingList}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <VerticalPosterView
                item={item}
                handleOnPress={() => onPosterPress(item)}
              />
            );
          }}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView nestedScrollEnabled> */}
      <Header props={props} />
      {renderTrendingMoives()}
      {renderPopularMovies()}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
  },
  labelStyle: {
    paddingLeft: 10,
  },
});
