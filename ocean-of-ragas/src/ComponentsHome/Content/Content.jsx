import React from 'react'
import './content.css'
import { GiSpeaker } from 'react-icons/gi'

const Content = () => {
  return (
    <div>
      <div className='content__table'>
        <table>
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
            <td><a href="">Asavri</a></td>
            <td>T.K.Janorikar</td>
            <td>-</td>
            <td><a href='../../Assets/songs/songs_Asavari_TDJanorikar.mp3' target="_blank"><GiSpeaker/></a></td>
          </tr>
          <tr>
            <td><a href="">Abheri</a></td>
            <td>Rajesh Vaidya</td>
            <td>Veena</td> 
            <td><a href='../../Assets/songs/songs_Abheri_RajeshVaidya_Veena.mp3' target="_blank"><GiSpeaker/></a></td>
          </tr>
          <tr>
            <td><a href="">AbheriTodi</a></td>
            <td>Ramashreya Jha</td>
            <td>-</td>
            <td><a href='../../Assets/songs/songs_AbheriTodi_RamashreyaJha.mp3' target="_blank"><GiSpeaker/></a></td>
          </tr>
          <tr>
            <td><a href="">Abhogi</a></td>
            <td>Rajashri Mahajani</td>
            <td>-</td>
            <td><a href='../../Assets/songs/songs_3_Abhogi_RajashreeMahajani.mp3' target="_blank"><GiSpeaker/></a></td>
          </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default Content