import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "./assets/MYtineraryLogo.png";
import arrow from "./assets/circled-right-2.png";

import "./App.css";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header home={true} />
        <div className="App">
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
      </React.Fragment>
    );
  }
}

export default App;
