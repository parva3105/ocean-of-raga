import React from 'react';
import '../App.css';
import About from '../ComponentsHome/About/About';
import Content from '../ComponentsHome/Content/Content'
import Footer from '../ComponentsHome/Footer/Footer'
import Nav from '../ComponentsHome/NavBar/Nav'

function HomePage({src , setSrc}) {
  return (
    <div className="App">
      <About />
      <Nav />
      <Content src={src} setSrc={setSrc} />
      <Footer />
    </div>
  );
}

export default HomePage;
