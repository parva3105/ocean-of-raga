import React, { useState, useEffect, useContext } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { SongContext } from '../context/SongContext';
import { musicFiles } from './utils/songUtils';



const AudioPlayer = () => {
  const { path } = useContext(SongContext);
  const [audioSrc, setAudioSrc] = useState(path);

  useEffect(() => {
    setAudioSrc(musicFiles[path]);
  }, [path]);

  return (
    <div className="header__player">
      <div id="now-playing" className="info header__audio">
        Now Playing:                       
      </div>
      <div id="audio-tag" className="header__player__control">
        <ReactAudioPlayer src={audioSrc} autoPlay controls />
      </div>
    </div>
  );
};

export default AudioPlayer;
