import React, { useContext } from 'react';
import './content.css';
import { GiSpeaker } from 'react-icons/gi';
import { SongContext } from '../../context/SongContext';

const songs = [
  {
    name: 'Asavri',
    artist: 'T.K.Janorikar',
    instrument: '-',
    path: 'Asavri'
  },
  {
    name: 'Abheri',
    artist: 'Rajesh Vaidya',
    instrument: 'Veena',
    path: 'Abheri'
  },
  {
    name: 'AbheriTodi',
    artist: 'Ramashreya Jha',
    instrument: '-',
    path: 'AbheriTodi'
  },
  {
    name: 'Abhogi',
    artist: 'Rajashri Mahajani',
    instrument: '-',
    path: 'Abhogi'
  },
];

const Content = () => {
  const { setPath } = useContext(SongContext);

  const handleSongClick = (path) => {
    setPath(path);
  };

  return (
    <div className='content__table'>
      <table className='table__head'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Artist</th>
            <th>Instrument</th>
            <th>Play</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <tr key={song.path}>
              <td>{song.name}</td>
              <td>{song.artist}</td>
              <td>{song.instrument}</td>
              <td>
                <button
                  id={`songBtn ${song.path}`}
                  value={song.path}
                  onClick={() => handleSongClick(song.path)}
                  className='player'
                >
                  Play <GiSpeaker />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Content;
