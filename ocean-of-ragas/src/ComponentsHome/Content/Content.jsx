import React from 'react'
import './content.css'
import { GiSpeaker } from 'react-icons/gi'

const Content = ({src , setSrc}) => {

  const setSong = (e) => {
    setSrc(e.target.value)
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
            <td><button id='songBtn asavri' value='../Assets/songs/songs_Asavari_TDJanorikar.mp3' onClick={setSong} className='player'><GiSpeaker/></button></td>
          </tr>
          <tr>
            <td>Abheri</td>
            <td>Rajesh Vaidya</td>
            <td>Veena</td> 
            <td><button id='songBtn abheri' value='../Assets/songs/songs_Abheri_RajeshVaidya_Veena.mp3' onClick={setSong} className='player'><GiSpeaker/></button></td>
          </tr>
          <tr>
            <td>AbheriTodi</td>
            <td>Ramashreya Jha</td>
            <td>-</td>
            <td><button id='songBtn abheritodi' value='../Assets/songs/songs_AbheriTodi_RamashreyaJha.mp3' onClick={setSong} className='player'><GiSpeaker/></button></td>
          </tr>
          <tr>
            <td>Abhogi</td>
            <td>Rajashri Mahajani</td>
            <td>-</td>
            <td><button id='songBtn abhogi' value='../Assets/songs/songs_3_Abhogi_RajashreeMahajani.mp3' onClick={setSong} className='player'><GiSpeaker/></button></td>
          </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default Content