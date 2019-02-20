import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";

import "./MessageForm.css";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  submitHandler(event) {
    event.preventDefault();
    const { text } = this.state;
    const { user, itinerary } = this.props;

    if (isEmpty(text)) return alert("Text field cannot be empty!");

    const newMessage = {
      text,
      name: user.user.name,
      avatar: user.user.avatar,
      itineraryId: itinerary._id
    };

    console.log(newMessage);
  }

  onChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div className="form-wrapper">
        <div className="section-title">
          <h4>Add message</h4>
        </div>
        <form onSubmit={this.submitHandler.bind(this)} className="message-form">
          <div className="form-control message-form-control">
            <label htmlFor="text" />
            <textarea
              name="text"
              id="text"
              cols="40"
              rows="4"
              placeholder="Please, say something ..."
              value={this.state.text}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-actions message-form-actions">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    );
  }
}

MessageForm.propTypes = {
  itinerary: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToprops = state => ({
  itinerary: state.itinerary,
  user: state.user
});

export default connect(mapStateToprops)(MessageForm);
