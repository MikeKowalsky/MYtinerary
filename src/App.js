import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";
import PropTypes from "prop-types";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/userActions";

import logo from "./assets/MYtineraryLogo.png";
import arrow from "./assets/circled-right-2.png";
import Header from "./components/Header/Header";

import "./App.css";

class App extends Component {
  componentWillMount() {
    // Check for token in localStorage
    if (localStorage.jwtItiToken) {
      // Set header for axios requests
      setAuthToken(localStorage.jwtToken);

      // Decode token and get user info
      const decoded = jwt_decode(localStorage.jwtItiToken);

      // Set user and isAuthenticated
      this.props.setCurrentUser(decoded);

      // Check for expired token
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        // Logout user
        this.props.logoutUser();
      }
    }
  }

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

App.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired
};

export default connect(
  null,
  { setCurrentUser, logoutUser }
)(withRouter(App));
