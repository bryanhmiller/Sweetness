import React, { Component } from 'react';
import logo from './heart.svg';
import './App.css';

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
          <h1 className="App-title">Welcome to Sweetness</h1>
        </header>
        <p className="App-intro">Songs</p>
      </div>
    );
  }
}

export default App;
