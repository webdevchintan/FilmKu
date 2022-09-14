import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  trendingList: [],
  searchList: [],
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setTrendingList: (state, action) => {
      state.trendingList = action.payload;
    },
    setSearchList: (state, action) => {
      state.searchList = action.payload;
    },
    setSearchMoreResult: (state, action) => {
      state.searchList = mergeTwoArray(action.payload, state.searchList);
    },
  },
});
const mergeTwoArray = (newData, oldData) => {
  const result = [...oldData, ...newData].reduce((res, data, index, arr) => {
    if (res.findIndex(movie => movie.id === data.id) < 0) {
      res.push(data);
    }
    return res;
  }, []);
  return result;
};
// Action creators are generated for each case reducer function
export const {setTrendingList, setSearchList, setSearchMoreResult} =
  movieSlice.actions;

export default movieSlice.reducer;
