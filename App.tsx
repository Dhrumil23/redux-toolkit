import * as React from 'react';
import './style.css';
import MoviePlaylist from './components/MoviePlaylist';
import SongPlaylist from './components/SongsPlaylist';
import { useDispatch } from 'react-redux';
import { resetList } from './store';

export default function App() {
  const dispatch = useDispatch();

  const handlePlayListReset = () => {
    dispatch(resetList());
  };

  return (
    <div>
      <div className="card mt-3 me-3 ms-2 p-2">
        <button
          type="button"
          onClick={handlePlayListReset}
          className="btn btn-secondary"
        >
          Reset Both Playlist
        </button>
      </div>
      <SongPlaylist />
      <MoviePlaylist />
    </div>
  );
}
