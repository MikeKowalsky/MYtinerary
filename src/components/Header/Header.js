import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Menu from "../Menu/Menu";

import "./Header.css";

class Header extends Component {
  constructor() {
    super();
    this.state = { isOpen: false };
  }

  toggleModal = () => {
    console.log("in toggleModal");
    if (!this.state.isOpen) {
      document.addEventListener("click", this.toggleModal, false);
    } else {
      document.removeEventListener("click", this.toggleModal, false);
    }
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  // need to do this because, when user click on a link Menu needs to be closed before loading login/signup page
  componentWillUnmount() {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div className="header">
        <i className="material-icons">account_circle</i>
        <i className="material-icons" onClick={this.toggleModal}>
          menu
        </i>

        {this.state.isOpen && <Menu />}

        {/* <Menu show={this.state.isOpen}> */}
        {/* <Menu show={this.state.isOpen} onClose={this.toggleModal}> */}
        {/* Here's some content for the modal */}
        {/* </Menu> */}
      </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(Header);
