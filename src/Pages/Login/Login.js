import React, { Component } from "react";

import isEmpty from "../../validation/is-empty";

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

    console.log(email, password);
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

export default Login;
