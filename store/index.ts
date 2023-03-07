import { configureStore, createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    reset(state, aciton) {
      return [];
    },
  },
});

const songsSlice = createSlice({
  name: 'songs',
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase('movies/reset', (state, action) => {
      return [];
    });
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

export { store };

export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie, reset } =
  moviesSlice.actions;
