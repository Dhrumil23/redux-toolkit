import * as React from 'react';
import './style.css';
import MoviePlaylist from './components/MoviePlaylist';
import SongPlaylist from './components/SongsPlaylist';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from './store';

export default function App() {
  const dispatch = useDispatch();

  const haldlePlayListReset = () => {
    dispatch(reset([]));
  };

  return (
    <div>
      <div className="card mt-3 me-3 ms-2 p-2">
        <button
          type="button"
          onClick={haldlePlayListReset}
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
