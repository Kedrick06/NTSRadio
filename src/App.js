import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="hero-image">
        <h2>BLUE NOTE 80TH ANNIVERSARY BROADCAST</h2><h3>New York</h3>
        <h4>A full day of radio hosted by some of the label's most notable artists and enthusiasts.</h4>
      </div>
      <div className="mixtapes-section">
        <h2>INFINITE MIXTAPES</h2>
        <h3>Music-only themed radio streams, made from NOTS resident and guest shows</h3>
        <div className="mixtape-child">
          <div className="memorylane">MEMORY LANE</div>
          <div className="poolside">POOLSIDE</div>
          <div className="expansions"></div>
          <div className="hiphop"></div>
          <div className="slowfocus"></div>
          <div className="thefloor"></div>
        </div>
        

      </div>
    </div>
  );
}

export default App;
