import React from 'react'
import './content.css'
import { GiSpeaker } from 'react-icons/gi'

const Content = () => {
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
            <td><button id='asavri' className='player'><GiSpeaker/></button></td>
          </tr>
          <tr>
            <td>Abheri</td>
            <td>Rajesh Vaidya</td>
            <td>Veena</td> 
            <td><button id='abheri' className='player'><GiSpeaker/></button></td>
          </tr>
          <tr>
            <td>AbheriTodi</td>
            <td>Ramashreya Jha</td>
            <td>-</td>
            <td><button id='abheritodi' className='player'><GiSpeaker/></button></td>
          </tr>
          <tr>
            <td>Abhogi</td>
            <td>Rajashri Mahajani</td>
            <td>-</td>
            <td><button id='abhogi' className='player'><GiSpeaker/></button></td>
          </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default Content