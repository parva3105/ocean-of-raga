import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import Header from './ComponentsIndex/Header/Header'
import defaultSong from  '../src/Assets/songs/songs_Adbhutranjani_GoswamiGokulotsavmaharaj.mp3'
import HomePage from './pages/HomePage';
import { SongContext } from './context/SongContext';
function App() {
  const [path,setPath] = useState(defaultSong)

  return (  
    <SongContext.Provider value ={{path,setPath}}>
    <div className='App'>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={
            <IndexPage 
          />} />
        <Route path='/home' element={
            <HomePage  />
          } />
      </Routes>
    </BrowserRouter>
    </div>
    </SongContext.Provider>
  )
}

export default App;
