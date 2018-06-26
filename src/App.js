import React, { Component } from 'react';
import logo from './heart.svg';
import './App.css';
import {button} from 'react-bootstrap';

class App extends Component {
  render() {
    let headerStyle = {
                        background: "#FF182A",
                        "font-size": "30px",
                        "text-shadow": "5px 5px 5px #7F0C15" 
                      }
    let headerImage = {
                      }
                        
    return (
      <div className="App">
        <header className="App-header" style={headerStyle}>
          <img src={logo} className="App-logo" alt="logo" style={headerImage} />
          <h3 className="App-welcome">Welcome to</h3>
          <h1 className="App-Name">Sweetness</h1>
        </header>
        <button className="App-songs" >Songs</button>
        <button className="App-cuteness">Cuteness</button>
        <button className="App-poems">Poems</button>
        <button className="App-verses">Verses</button>
        <button className="App-surprises">Surprises</button>
        <button className="App-messages">Messages</button>
      </div>
    );
  }
}

export default App;
