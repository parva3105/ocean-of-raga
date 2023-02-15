import React from 'react';
import '../App.css';
import About from '../ComponentsIndex/About/About'
import Header from '../ComponentsIndex/Header/Header';

function IndexPage() {
  return (
    <div className="App">
    <Header />
    <About />
    </div>
  );
}

export default IndexPage;
