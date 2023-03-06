import React, { FC, MouseEvent } from 'react';

const MoviePlaylist: FC = () => {
  const songPlayList = ['HI', 'Hello', 'By', 'Chala ja ***k ...'];

  const handleSongAdd = (evt: MouseEvent<HTMLButtonElement>) => {};

  const handleSongRemove = (evt: MouseEvent<HTMLButtonElement>) => {};

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
              onClick={handleSongRemove}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviePlaylist;
