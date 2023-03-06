import React, { FC, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { song } from '../data';
import { addSong, removeSong } from '../store';

const SongPlaylist: FC = () => {
  const dispatch = useDispatch();
  const songPlayList = useSelector((state) => state.songs);

  const handleSongAdd = (evt: MouseEvent<HTMLButtonElement>) => {
    const rSong = song();
    dispatch(addSong(rSong););
  };

  const handleSongRemove = (song: any) => {
    dispatch(removeSong(song));
  };

  return (
    <div className="card mt-3 me-3 ms-2 p-2">
      <h2 className="text-center mt-3">Song Playlist</h2>
      <button
        type="button"
        onClick={handleSongAdd}
        className="btn btn-primary "
      >
        Add Song to Playlist
      </button>

      <ul className="list-group  mt-2">
        {songPlayList.map((elm, i) => (
          <li
            key={i}
            className="list-group-item d-flex justify-content-between"
          >
            {elm}
            <button
              className="btn btn-danger text-end"
              onClick={() => handleSongRemove(elm)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongPlaylist;
