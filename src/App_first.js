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

        <img src={ logo } className="App-logo" alt="logo"/>
        <p className="App-intro">
          Find your perfect trip, designed by insiders who know and love their cities.
        </p>
        <p className="App-start-browsing">
          Start browsing
        </p>
        <Link to="/cities">
          <img src={ arrow } className="App-arrow" alt="arrow" />
        </Link>
        <p className="App-call-to-action">
          Want to build your own MYtinerary?
        </p>

        <div className="App-links">
          <Link to="/login"><p>Log in</p></Link>
          <Link to="/signup"><p>Create Account</p></Link>
        </div>

      </div>
    );
  }
}

export default App;
