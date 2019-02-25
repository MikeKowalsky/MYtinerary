import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";
import PropTypes from "prop-types";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/userActions";

import App from "./App";
import Cities from "./pages/Cities/Cities";
import Itineraries from "./pages/Itineraries/Itineraries";
import SingleItinerary from "./pages/Itineraries/SingleItinerary";
import NewItinerary from "./pages/Itineraries/NewItinerary";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile/Profile";

class Root extends Component {
  componentWillMount() {
    // Check for token in localStorage
    if (localStorage.jwtItiToken) {
      // Set header for axios requests
      setAuthToken(localStorage.jwtItiToken);

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
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={App} />
            <Route path="/cities" component={Cities} />
            <Route path="/city/:cityName" component={Itineraries} />
            <Route path="/iterinaryDetails" component={SingleItinerary} />
            <Route path="/newIterinary" component={NewItinerary} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/profile" component={Profile} />
          </div>
        </Router>
      </Provider>
    );
  }
}

Root.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  store: PropTypes.object.isRequired
};

export default connect(
  null,
  { setCurrentUser, logoutUser }
)(Root);
