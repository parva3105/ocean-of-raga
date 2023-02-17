import React from 'react';
import './App.css';
import About from './ComponentsHome/About/About';
import Header from './ComponentsHome/Header/Header';
import Content from './ComponentsHome/Content/Content'
import Footer from './ComponentsHome/Footer/Footer'
import Nav from './ComponentsHome/NavBar/Nav'

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Nav />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
