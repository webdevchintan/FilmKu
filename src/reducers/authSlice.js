import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userDetails: null,
  isLogin: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userDetails = action.payload;
      state.isLogin = true;
    },
    logoutUser: state => {
      state.isLogin = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUser, logoutUser} = authSlice.actions;

export default authSlice.reducer;
