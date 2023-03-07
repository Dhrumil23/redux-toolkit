import { configureStore } from '@reduxjs/toolkit';
import { resetList } from './actions';
import { moviesReducer, addMovie, removeMovie } from './slices/movieSlice';
import { songsReducer, addSong, removeSong } from './slices/songSlice';

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

export { store };
export { addMovie, removeMovie, addSong, removeSong, resetList };
