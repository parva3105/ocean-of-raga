import React, { useState, useEffect, useContext } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { SongContext } from '../context/SongContext';
import { musicFiles } from './utils/songUtils';



const AudioPlayer = () => {
  const { path } = useContext(SongContext);
  const [audioSrc, setAudioSrc] = useState(path);
  const [songName, setSongName] = useState('Adbhutranjani')

  

  useEffect(() => {
    setAudioSrc(musicFiles[path])
    if(musicFiles[path]){
      setSongName(path)
    }
  }, [path]);
  return (
    <div className="header__player">
      <div id="now-playing" className="info header__audio">
        Now Playing:  {songName}
      </div> &nbsp; &nbsp;&nbsp;&nbsp;
      <div id="audio-tag" className="header__player__control">
        <ReactAudioPlayer src={audioSrc} autoPlay controls />
      </div>
    </div>
  );
};

export default AudioPlayer;
