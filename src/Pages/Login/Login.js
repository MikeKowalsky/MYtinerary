import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";
import { loginUser } from "../../actions/userActions";

import BackButton from "../../components/BackButton/BackButton";

import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.emailEl = React.createRef();
    this.passwordEl = React.createRef();
  }

  submitHandler = event => {
    event.preventDefault();
    const email = this.emailEl.current.value;
    const password = this.passwordEl.current.value;

    // Super simple validation
    if (isEmpty(email) || isEmpty(password)) return;

    const user = {
      email,
      password
    };

    console.log(user);
    this.props.loginUser(user);
  };

  render() {
    return (
      <div className="login">
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
)(Login);
