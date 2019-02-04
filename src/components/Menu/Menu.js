import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

class Menu extends Component {
  render() {
    return (
      <div className="outerWrapper">
        <div className="innerWrapper">
          <Link to="/login">
            <p>Log in</p>
          </Link>
          <Link to="/signup">
            <p>Create Account</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Menu;
