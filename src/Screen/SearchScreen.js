import React, {useEffect, useMemo, useState} from 'react';
import {
  TextInput,
  Text,
  FlatList,
  StyleSheet,
  Image,
  View,
  Pressable,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {API_KEY, URL, Version} from '../apis/constant';
import PosterView from '../Components/PosterView';
import {images} from '../theme/images';
import debouce from 'lodash.debounce';

function SearchScreen(props) {
  const [search, setSearch] = useState('');
  const [trendingList, setTrendingList] = useState([]);
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    getTrendingList();
  }, []);

  // Trending List API
  function getTrendingList() {
    fetch(`${URL}/${Version}/trending/movie/day?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(response => {
        if (response.results.length > 0) {
          setTrendingList(response.results);
        }
      })
      .catch(err => {
        console.log('err', err);
      });
  }

  // search Movie API
  function searchMovie(searchString) {
    fetch(
      `${URL}${Version}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchString}`,
    )
      .then(res => res.json())
      .then(response => {
        if (response.results.length > 0) {
          setSearchList(response.results);
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

  const handleChange = text => {
    setSearch(text);
    if (search !== '') {
      searchMovie(text); // call search API
      const listToDisplay = searchList.filter(movie => {
        const itemData = movie.title
          ? movie.title.toLowerCase()
          : ''.toLowerCase();
        const searchString = text.toLowerCase();
        return itemData.indexOf(searchString) > -1;
      });
      setSearchList(listToDisplay);
    } else {
      setTrendingList(trendingList);
    }
  };

  const debouncedResults = useMemo(() => {
    return debouce(handleChange, 300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  function renderSearch() {
    return (
      <TextInput
        value={search}
        onChangeText={handleChange}
        style={styles.textBox}
        placeholder={'Search here...'}
        placeholderTextColor={'grey'}
      />
    );
  }

  function renderTrending() {
    return (
      <FlatList
        data={trendingList}
        numColumns={2}
        renderItem={({item}) => {
          return <PosterView item={item} />;
        }}
      />
    );
  }

  function renderSearchList() {
    return (
      <FlatList
        data={searchList}
        numColumns={2}
        renderItem={({item}) => {
          return <PosterView item={item} />;
        }}
      />
    );
  }

  return (
    <SafeAreaView>
      <View style={styles.mainView}>
        {renderHeader()}
        {renderSearch()}
      </View>
      <Text style={styles.headLabel}>
        {search === '' ? 'Trending Movies' : 'Search Results'}
      </Text>
      {search === '' ? renderTrending() : renderSearchList()}
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
    color: 'nevyblue',
  },
});
