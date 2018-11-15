import React, { Component } from "react";
import logo from "./assets/MYtineraryLogo.png";
import arrow from "./assets/circled-right-2.png";
import { Header } from "./components/Header";

import { Link } from "react-router-dom";
import "./App.css";
// import { AppSlider } from "./components/AppSlider";
import AppSliderDynamic from "./components/AppSliderDynamic";

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
          <p>Popular MYtineraries</p>
        </div>

        <div className="App-slider">
          {/* <AppSlider /> */}
          <AppSliderDynamic />
        </div>
      </div>
    );
  }
}

export default App;
