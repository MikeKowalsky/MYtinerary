import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";
import { registerUser } from "../../actions/userActions";

import BackButton from "../../components/BackButton/BackButton";

class SignUp extends Component {
  constructor() {
    super();

    this.nameEl = React.createRef();
    this.emailEl = React.createRef();
    this.passwordEl = React.createRef();
    this.password2El = React.createRef();
    this.avatarEl = React.createRef();
  }

  // if user isAuth then redirect to main
  componentDidMount() {
    if (this.props.user.isAuthenticatde) {
      this.props.history.push("/");
    }
  }

  submitHandler = event => {
    event.preventDefault();
    const name = this.nameEl.current.value;
    const email = this.emailEl.current.value;
    const password = this.passwordEl.current.value;
    const password2 = this.password2El.current.value;
    let avatar = this.avatarEl.current.value;

    // Super simple validation
    if (
      isEmpty(name) ||
      isEmpty(email) ||
      isEmpty(password) ||
      isEmpty(password2)
    )
      return alert("Fill in all fields");

    if (password !== password2)
      return alert("Password confirmation incorrect!");

    if (isEmpty(avatar))
      avatar =
        "https://education.fsu.edu/wp-content/uploads/2016/09/staff-avatar-man.png";

    const newUser = {
      name,
      email,
      password,
      avatar
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    return (
      <div className="create-account form-wrapper">
        <h1>Sign Up!</h1>
        <form className="user-form" onSubmit={this.submitHandler}>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" ref={this.nameEl} />
          </div>
          <div className="form-control">
            <label htmlFor="email">E-Mail</label>
            <input type="email" id="email" ref={this.emailEl} />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={this.passwordEl} />
          </div>
          <div className="form-control">
            <label htmlFor="password2">Password - please confirm</label>
            <input type="password" id="password2" ref={this.password2El} />
          </div>
          <div className="form-control">
            <label htmlFor="avatar">
              Avatar picture - please add hiperlink (optional)
            </label>
            <input type="text" id="avatar" ref={this.avatarEl} />
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

SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToprops = state => ({
  user: state.user
});

export default connect(
  mapStateToprops,
  { registerUser }
)(withRouter(SignUp));
