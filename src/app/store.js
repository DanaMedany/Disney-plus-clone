import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movie.js/movieSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});
