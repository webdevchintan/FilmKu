import {API_KEY, URL, Version} from '../apis/constant';
import {
  setSearchList,
  setSearchMoreResult,
  setTrendingList,
} from '../reducers/movieSlice';
import store from '../store/configureStore';

export const getTrendingMovieList = () =>
  fetch(`${URL}/${Version}/trending/movie/day?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(response => {
      if (response && response?.results) {
        store.dispatch(setTrendingList(response.results));
      }
    })
    .catch(err => {
      console.log('err', err);
    });

export const getSearchMovieslist = (searchString, pageNumber = 1) =>
  fetch(
    `${URL}${Version}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchString}&page=${pageNumber}`,
  )
    .then(res => res.json())
    .then(response => {
      if (response && response?.results && response?.results?.length > 0) {
        if (pageNumber > 1) {
          store.dispatch(setSearchMoreResult(response.results));
        } else {
          store.dispatch(setSearchList(response.results));
        }
      }
    })
    .catch(err => {
      console.log('err', err);
    });
