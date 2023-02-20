import React from 'react';


const AudioPlayer = ({path}) => {
  
  const pathName = path
  console.log(pathName);
  
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