import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movie.js/movieSlice';
import userSlice from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userSlice,
  },
});
