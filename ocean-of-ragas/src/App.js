import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import Header from './ComponentsIndex/Header/Header'
import defaultSong from  '../src/Assets/songs/songs_Adbhutranjani_GoswamiGokulotsavmaharaj.mp3'
import HomePage from './pages/HomePage';
function App() {
  const [src,setSrc] = useState(defaultSong)
  let songName = src
  return (<BrowserRouter>
      <Header name={songName} />
      <Routes>
        <Route path='/' element={
            <IndexPage 
          />} />
        <Route path='/home' element={
            <HomePage src={src} setSrc={setSrc} />
          } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
