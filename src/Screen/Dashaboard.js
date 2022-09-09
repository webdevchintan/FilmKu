import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {API_KEY, URL, Version} from '../apis/constant';
import Header from '../Components/Header';
import PosterView from '../Components/PosterView';
import VerticalPosterView from '../Components/VerticalPosterView';
import { theme } from '../theme';

function Dashboard(props) {
  const [TrendingMovies, setTrendingMovies] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    getMovies();
  }, []);

  function getMovies() {
    fetch(`${URL}/${Version}/trending/movie/day?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(response => {
        if (response.results.length > 0) {
          setTrendingMovies(response.results);
        }
      })
      .catch(err => {
        console.log('err', err);
      });
  }

  const onPosterPress = details => {
    console.log('details',details)
    navigation.navigate('MovieDetailScreen', {details});
  };
  function renderTrendingMoives() {
    return (
      <View>
        <Text style={styles.headLabel}>Now Showing</Text>
        <FlatList
          data={TrendingMovies}
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
        <Text style={styles.headLabel}>Popular</Text>
        <FlatList
          data={TrendingMovies}
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
    <SafeAreaView>
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
  headLabel: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    color: theme.colors.darkBlue,
  },
  row: {
    flexDirection: 'row',
  },
  rating: {
    color: 'grey',
    margin: 10,
  },
  iconCenter: {
    alignSelf: 'center',
  },
});
