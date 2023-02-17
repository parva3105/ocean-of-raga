import React from 'react'
import './content.css'
import { GiSpeaker } from 'react-icons/gi'
import song1 from '../../Assets/songs/songs_Asavari_TDJanorikar.mp3'
import song2 from '../../Assets/songs/songs_Abheri_RajeshVaidya_Veena.mp3'
import song3 from '../../Assets/songs/songs_AbheriTodi_RamashreyaJha.mp3'
import song4 from '../../Assets/songs/songs_3_Abhogi_RajashreeMahajani.mp3'

const Content = ({source , setSource}) => {
  const handleClick = (e) => {
    let x = document.getElementById('audio-source')
    x.src = e.target.value
  }
  
  return (
    <div>
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
          <tr>
            <td>Asavri</td>
            <td>T.K.Janorikar</td>
            <td>-</td>
            <td><button id='asavri' value={song1} onClick={handleClick} className='player'><GiSpeaker/></button></td>
          </tr>
          <tr>
            <td>Abheri</td>
            <td>Rajesh Vaidya</td>
            <td>Veena</td> 
            <td><button id='abheri' value={song2} className='player'><GiSpeaker/></button></td>
          </tr>
          <tr>
            <td>AbheriTodi</td>
            <td>Ramashreya Jha</td>
            <td>-</td>
            <td><button id='abheritodi' value={song3} className='player'><GiSpeaker/></button></td>
          </tr>
          <tr>
            <td>Abhogi</td>
            <td>Rajashri Mahajani</td>
            <td>-</td>
            <td><button id='abhogi' value={song4} onClick={handleClick} className='player'><GiSpeaker/></button></td>
          </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default Content