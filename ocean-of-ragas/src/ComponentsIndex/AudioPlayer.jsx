import React, { useState } from 'react';
import defaultSong from '../Assets/songs/songs_Adbhutranjani_GoswamiGokulotsavmaharaj.mp3'

const AudioPlayer = ({path}) => {
  
  const [pathName,setPathName] = useState(defaultSong)
  

  if(path !== defaultSong){
    console.log(path);
  }
  
  
  
  return (
    <div className='header__player'>
        <div id='now-playing' className=" info header__audio">Now Playing : 5_Hindol.mp3  </div>
            <div id='audio-tag' className="header__player__control">
            <audio id='my-audio' autoPlay controls>
                <source id='audio-source' src={pathName} type="audio/mpeg"/>
            </audio>
        </div>
    </div>
  )
}

export default AudioPlayer;