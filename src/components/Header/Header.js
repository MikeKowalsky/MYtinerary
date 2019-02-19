import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Menu from "../Menu/Menu";

import "./Header.css";
import BackButton from "../BackButton/BackButton";

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
        <div className="left-side">
          <i className="material-icons">account_circle</i>
          {!this.props.home && <BackButton standAlone={false} />}
        </div>
        <i className="material-icons" onClick={this.toggleModal}>
          menu
        </i>

        {this.state.isOpen && <Menu />}
      </div>
    );
  }
}

Header.defaultProps = {
  home: false
};

Header.propTypes = {
  user: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  home: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(Header);
