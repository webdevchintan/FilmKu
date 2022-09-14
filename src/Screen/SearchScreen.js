import React, {useEffect, useMemo, useState} from 'react';
import {
  TextInput,
  FlatList,
  StyleSheet,
  Image,
  View,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PosterView from '../Components/PosterView';
import {images} from '../theme/images';
import debouce from 'lodash.debounce';
import {theme} from '../theme';
import {getSearchMovieslist} from '../services';
import {useSelector} from 'react-redux';
import Button from '../Components/Button';
import {HeadingLabel} from '../Components/HeadingLabel';

function SearchScreen({navigation}) {
  const {trendingList, searchList} = useSelector(state => state.movie);
  const [search, setSearch] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  // search Movie API
  async function searchMovie(searchString) {
    setLoading(true);
    try {
      getSearchMovieslist(searchString, pageNumber);
    } catch (error) {}
    setLoading(false);
  }
  const onPressLoadMore = () => {
    setLoading(true);
    try {
      getSearchMovieslist(search, pageNumber + 1);
    } catch (error) {}
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  function renderHeader() {
    return (
      <Pressable
        style={styles.headerView}
        onPress={() => {
          navigation.pop();
        }}>
        <Image source={images.back} />
      </Pressable>
    );
  }

  const handleChange = text => {
    setSearch(text);
    if (search !== '') {
      setPageNumber(1);
      searchMovie(text); // call search API
    } else {
      setPageNumber(1);
      searchMovie(text);
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
        style={styles.searchBox}
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
          return (
            <PosterView item={item} handleOnPress={() => onPosterPress(item)} />
          );
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
          return (
            <PosterView item={item} handleOnPress={() => onPosterPress(item)} />
          );
        }}
        onEndReached={() => {
          if (search !== '') {
            setPageNumber(prev => prev + 1);
          }
        }}
        onEndReachedThreshold={0.5}
      />
    );
  }
  const onPosterPress = details => {
    navigation.navigate('MovieDetailScreen', {details});
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderSearch()}
      <HeadingLabel
        label={search === '' ? 'Trending Movies' : 'Search Results'}
        style={styles.labelStyle}
      />
      <View style={styles.listContainer}>
        {search === '' ? renderTrending() : renderSearchList()}
        {pageNumber > 1 && (
          <Button
            mode="contained"
            icon={({size, color}) =>
              loading ? <ActivityIndicator size={size} color={color} /> : null
            }
            disabled={loading}
            onPress={onPressLoadMore}
            style={styles.buttonStyle}>
            Load More
          </Button>
        )}
      </View>
    </SafeAreaView>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    height: '100%',
    paddingBottom: '45%',
  },
  searchBox: {
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 14,
    borderWidth: 1,
    borderColor: theme.colors.black,
  },
  headerView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.darkBlue,
    borderRadius: 20,
    height: 40,
    width: 40,
  },
  listContainer: {
    justifyContent: 'center',
    paddingBottom: 20,
    alignItems: 'center',
  },
  buttonStyle: {
    width: 200,
  },
  labelStyle: {
    paddingLeft: 10,
  },
});
