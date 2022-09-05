import React, {useEffect, useState} from 'react';
import {TextInput,Text,FlatList, StyleSheet, Image, View, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {API_KEY, URL, Version} from '../apis/constant';
import PosterView from '../Components/PosterView';
import {images} from '../theme/images';

function SearchScreen(props) {
  const [Search, setSearch] = useState();
  const [TrendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingList();
  }, []);

  //   https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

  function getTrendingList() {
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

  function renderHeader() {
    return (
      <Pressable
        style={styles.headerView}
        onPress={() => {
          props.navigation.pop();
        }}>
        <Image source={images.back} />
      </Pressable>
    );
  }

  function renderSearch() {
    return (
      <TextInput
        value={Search}
        onChangeText={val => {
          setSearch(val);
        }}
        style={styles.textBox}
        placeholder={'Search here...'}
        placeholderTextColor={'grey'}
      />
    );
  }

  function renderTrending() {
    return  <FlatList
    data={TrendingMovies}
    numColumns={2}
    
    renderItem={({item}) => {
      return <PosterView item={item} />
    }}
  />
  }

  return (
    <SafeAreaView>
      <View style={styles.mainView}>
        {renderHeader()}
        {renderSearch()}
      </View>
      <Text style={styles.headLabel}>Trending Movies</Text>
      {renderTrending()}
    </SafeAreaView>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  textBox: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 20,
    margin: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  mainView: {
    backgroundColor: 'black',
  },
  headerView: {
    padding: 20,
    alignSelf: 'flex-start',
  },
  headLabel: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    color:'nevyblue'
  },
});
