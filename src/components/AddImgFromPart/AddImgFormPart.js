import React, { Component } from "react";
import PropTypes from "prop-types";

class AddImgFormPart extends Component {
  constructor() {
    super();
    this.state = {
      activity: {
        name: "",
        url: ""
      }
    };
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="form-control frame">
        <label htmlFor="imgName">Activity no {number} - name:</label>
        <input
          type="text"
          name="name"
          minLength="3"
          maxLength="20"
          onChange={this.onChange}
          value={this.state.activity.name}
        />
        <label htmlFor="imgUrl">Activity no {number} - url:</label>
        <input
          type="text"
          name="url"
          minLength="3"
          maxLength="60"
          onChange={this.onChange}
          value={this.state.activity.url}
        />
      </div>
    );
  }
}

AddImgFormPart.propTypes = {
  givBackActivity: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired
};

export default AddImgFormPart;
