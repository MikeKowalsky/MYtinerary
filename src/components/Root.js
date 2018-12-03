import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "../App";
import Cities from "./Cities";
import { Login } from "./Login";
import { SignUp } from "./SignUp";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/cities" component={Cities} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
