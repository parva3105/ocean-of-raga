import React, { useState, useEffect, useContext } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { SongContext } from '../context/SongContext';
import { musicFiles } from './utils/songUtils';



const AudioPlayer = () => {
  const { path } = useContext(SongContext);
  const [audioSrc, setAudioSrc] = useState(path);
  const [songName, setSongName] = useState('Adbhutranjani')
  const [playing,setPlaying] = useState(true)

  console.log(playing);

  useEffect(() => {
    const playBtn = document.getElementById('play-button')
    const audioPlayer = document.getElementById('audio-player')
    if(playBtn){
    playBtn.addEventListener('click' , () => {
      audioPlayer.play();
      setPlaying(true)
    })  }
  } , )

  console.log(playing);

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
      <ReactAudioPlayer src={audioSrc} autoPlay={playing} controls id="audio-player" />
      </div>
    </div>
  );
};

export default AudioPlayer;
