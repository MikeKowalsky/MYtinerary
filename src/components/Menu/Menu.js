import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/userActions";

import "./Menu.css";

class Menu extends Component {
  logoutUserHandler = () => {
    this.props.logoutUser();
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="outerWrapper">
        <div className="innerWrapper">
          {this.props.isAuthenticated ? (
            <React.Fragment>
              <Link to="/profile">
                <p>Profile</p>
              </Link>
              <button onClick={this.logoutUserHandler}>Logout</button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Link to="/login">
                <p>Log in</p>
              </Link>
              <Link to="/signup">
                <p>Create Account</p>
              </Link>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(Menu));
