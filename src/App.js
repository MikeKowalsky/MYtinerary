import React, { Component } from 'react';
import logo from './assets/MYtineraryLogo.png';
import arrow from './assets/circled-right-2.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <img src={ logo } className="App-logo" alt="logo"/>
        <p className="App-intro">
          Find your perfect trip, designed by insiders who know and love their cities.
        </p>
        <p className="App-start-browsing">
          Start browsing
        </p>
        <img src={ arrow } className="App-arrow" alt="arrow" />
        <p className="App-call-to-action">
          Want to build your own MYtinerary?
        </p>
        <div className="App-links">
          {/* eslint-disable-next-line */}
          <a href="#"><p>Log in</p></a>
          {/* eslint-disable-next-line */}
          <a href="#"><p>Create Account</p></a>
        </div>

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
