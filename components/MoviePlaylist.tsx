import React, { FC, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, removeMovie } from '../store';
import { movie } from '../data';

const MoviePlaylist: FC = () => {
  const dispatch = useDispatch();

  const songPlayList = useSelector((state) => state.movies);

  const handleSongAdd = (evt: MouseEvent<HTMLButtonElement>) => {
    const data = movie();
    dispatch(addMovie(data));
  };

  const handleSongRemove = (movie: any) => {
    dispatch(removeMovie(movie));
  };

  return (
    <div className="card mt-3 me-3 ms-2 p-2">
      <h2 className="text-center mt-3">Movie Playlist</h2>
      <button
        type="button"
        onClick={handleSongAdd}
        className="btn btn-primary "
      >
        Add Movie to Playlist
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

export default MoviePlaylist;
