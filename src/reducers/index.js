import {combineReducers} from 'redux';

import authReducer from '../reducers/authSlice';
import movieReducer from '../reducers/movieSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  movie: movieReducer,
});

export default rootReducer;
