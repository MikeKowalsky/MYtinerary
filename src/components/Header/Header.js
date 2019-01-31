import React, { Component } from "react";
import Menu from "../Menu/Menu";

const divStyle = {
  margin: "20px",
  display: "flex",
  justifyContent: "space-between"
};

const iStyle = {
  fontSize: "48px"
};

class Header extends Component {
  constructor() {
    super();
    this.state = { isOpen: false };
  }

  toggleModal = () => {
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
      <div style={divStyle}>
        <i style={iStyle} className="material-icons">
          account_circle
        </i>
        <i style={iStyle} className="material-icons" onClick={this.toggleModal}>
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

export default Header;
