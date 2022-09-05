import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {API_KEY, Image_Path, URL, Version} from '../apis/constant';
import Header from '../Components/Header';
import PosterView from '../Components/PosterView';
import {images} from '../theme/images';

function Dashboard(props) {
  const [TrendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  function getMovies() {
    fetch(`${URL}/${Version}/trending/movie/day?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(response => {
        console.log('res', response);
        if (response.results.length > 0) {
          setTrendingMovies(response.results);
        }
      })
      .catch(err => {
        console.log('err', err);
      });
  }

  function renderTrendingMoives() {
    return (
      <View>
        <Text style={styles.headLabel}>Now Showing</Text>
        <FlatList
          data={TrendingMovies}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <PosterView item={item} />
          }}
        />
      </View>
    );
  }

  function renderPopularMovies(){
    return (
      <View>
        <Text style={styles.headLabel}>Popular</Text>
        <FlatList
          data={TrendingMovies}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <PosterView item={item} />
          }}
        />
      </View>
    );
  }

  

  return (
    <SafeAreaView style={{flex: 1}}>
     <Header props={props}/>
      {renderTrendingMoives()}
      {renderPopularMovies()}
    </SafeAreaView>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  headLabel: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    color:'nevyblue'
  },
  row : {
    flexDirection: 'row',
  },
  rating: {
    color: 'grey',
    margin: 10,
  },
  iconCenter : {
    alignSelf: 'center'
  }
});
