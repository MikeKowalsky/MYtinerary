import React, { Component } from 'react';
import logo from './assets/MYtineraryLogo.png';
import arrow from './assets/circled-right-2.png';

// import { Login } from './components/Login'
// import { CreateAccount } from './components/CreateAccount'

import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Link } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-top-menu">
          <i class="material-icons md-48">account_circle</i>
          <i class="material-icons md-48">menu</i>
        </div>
        <img src={ logo } className="App-logo" alt="logo"/>
        <p className="App-intro">
          Find your perfect trip, designed by insiders who know and love their cities.
        </p>
        <Link to="/cities">
          <img src={ arrow } className="App-arrow" alt="arrow" />
        </Link>
        <div className="App-call-to-action">
          <p>
            Popular MYtineraries
          </p>
        </div>

        <div className="App-slider">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* <div className="App-links">
          <Link to="/login"><p>Log in</p></Link>
          <Link to="/signup"><p>Create Account</p></Link>
        </div> */}

      </div>
    );
  }
}

export default App;
