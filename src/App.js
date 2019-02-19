import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "./assets/MYtineraryLogo.png";
import arrow from "./assets/circled-right-2.png";
import Header from "./components/Header/Header";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-intro">
          Find your perfect trip, designed by insiders who know and love their
          cities.
        </p>
        <Link to="/cities">
          <img src={arrow} className="App-arrow" alt="arrow" />
        </Link>
        <div className="App-call-to-action">
          <p>Want to build your own MYtinerary?</p>
          <p>Join us!</p>
        </div>
      </div>
    );
  }
}

export default App;
