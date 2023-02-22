import React, { useContext } from 'react'
import './content.css'
import { GiSpeaker } from 'react-icons/gi'
import { SongContext } from '../../context/SongContext'

const Content = () => {

  const { setPath } = useContext(SongContext)

  function setSong(e) {
    setPath(e.target.value)
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
            <td><button id='songBtn asavri' value='Asavri' onClick={setSong} className='player'>Play <GiSpeaker/></button></td>
          </tr>
          <tr>
            <td>Abheri</td>
            <td>Rajesh Vaidya</td>
            <td>Veena</td> 
            <td><button id='songBtn abheri' value='Abheri' onClick={setSong} className='player'>Play <GiSpeaker/></button></td>
          </tr>
          <tr>
            <td>AbheriTodi</td>
            <td>Ramashreya Jha</td>
            <td>-</td>
            <td><button id='songBtn abheritodi' value='AbheriTodi' onClick={setSong} className='player'>Play <GiSpeaker/></button></td>
          </tr>
          <tr>
            <td>Abhogi</td>
            <td>Rajashri Mahajani</td>
            <td>-</td>
            <td><button id='songBtn abhogi' value='Abhogi' onClick={setSong} className='player'>Play <GiSpeaker/></button></td>
          </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default Content