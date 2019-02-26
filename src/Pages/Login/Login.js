import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";
import { loginUser } from "../../actions/userActions";

import BackButton from "../../components/BackButton/BackButton";

class Login extends Component {
  constructor() {
    super();
    this.emailEl = React.createRef();
    this.passwordEl = React.createRef();
  }

  // after login when isAuth changed redirect
  componentWillReceiveProps(nextProps) {
    if (nextProps.user.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  submitHandler = event => {
    event.preventDefault();
    const email = this.emailEl.current.value;
    const password = this.passwordEl.current.value;

    // Super simple validation
    if (isEmpty(email) || isEmpty(password))
      return alert("Please give us name and password");

    const user = {
      email,
      password
    };

    this.props.loginUser(user);
  };

  render() {
    return (
      <div className="login form-wrapper">
        <h1>Login</h1>
        <form className="user-form" onSubmit={this.submitHandler}>
          <div className="form-control">
            <label htmlFor="email">E-Mail</label>
            <input type="email" id="email" ref={this.emailEl} />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={this.passwordEl} />
          </div>
          <div className="form-actions">
            <button type="submit">Submit</button>
          </div>
        </form>

        <div className="link-to-signup">
          <p>You don't have an account?</p>
          <Link to="/signup">Create it here!</Link>
        </div>

        <BackButton />
      </div>
    );
  }
}

Login.propTypes = {
  user: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));
