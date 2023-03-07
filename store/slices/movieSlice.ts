import { createSlice } from '@reduxjs/toolkit';
import { resetList } from '../actions';

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
    // reset(state, aciton) {
    //   return [];
    // },
  },
  extraReducers(builder) {
    builder.addCase(resetList, (state, action) => {
      return [];
    });
  },
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
