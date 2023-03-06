import * as React from 'react';
import MoviePlaylist from './components/MoviePlaylist';
import SongPlaylist from './components/SongsPlaylist';
import './style.css';

export default function App() {
  return (
    <div>
      <SongPlaylist />
      <MoviePlaylist />
    </div>
  );
}
