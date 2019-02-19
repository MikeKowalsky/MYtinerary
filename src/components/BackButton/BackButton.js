import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import "./BackButton.css";

class BackButton extends Component {
  render() {
    return (
      <div
        className={"back-button " + (this.props.standAlone ? "add-margin" : "")}
      >
        <i className="material-icons" onClick={this.props.history.goBack}>
          arrow_back_ios
        </i>
      </div>
    );
  }
}

BackButton.defaultProps = {
  standAlone: true
};

BackButton.propTypes = {
  standAlone: PropTypes.bool.isRequired
};

export default withRouter(BackButton);
