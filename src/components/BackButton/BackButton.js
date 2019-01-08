import React, { Component } from "react";

const divStyle = {
  display: "flex",
  justifyContent: "center"
};

const iStyle = {
  fontSize: "48px",
  margin: "20px 0"
};

class BackButton extends Component {
  static contextTypes = {
    router: () => null // replace with PropTypes.object if you use them
    //it was router: () => true, but it didn't work and now is fine
  };

  render() {
    return (
      <div style={divStyle}>
        <i
          className="material-icons"
          style={iStyle}
          onClick={this.context.router.history.goBack}
        >
          arrow_back_ios
        </i>
      </div>
    );
  }
}

export default BackButton;
