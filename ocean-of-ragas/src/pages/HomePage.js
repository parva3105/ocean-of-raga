import React, { useState } from 'react';
import '../App.css';
import About from '../ComponentsHome/About/About';
import Content from '../ComponentsHome/Content/Content'
import Footer from '../ComponentsHome/Footer/Footer'
import Nav from '../ComponentsHome/NavBar/Nav'

function HomePage() {
  const [source, setSource] = useState("")
  return (
    <div className="App">
      <About />
      <Nav />
      <Content 
      source={source}
      setSource={setSource}
      />
      <Footer />
    </div>
  );
}

export default HomePage;
