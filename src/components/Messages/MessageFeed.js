import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMessagesItinerary } from "../../actions/messagesActions";

import "./MessageFeed.css";

class MessageFeed extends Component {
  componentDidMount() {
    const limit = this.props.format === "short" ? 3 : "all";
    if (
      this.props.messages.length === 0 ||
      this.props.messages[0].itineraryId !== this.props.itinerary._id ||
      limit === "all"
    )
      this.props.getMessagesItinerary(this.props.itinerary._id, limit);
  }

  render() {
    return (
      <div>
        <div className="section-title">
          <h4>Messages</h4>
          <div>
            {this.props.messages.map(message => (
              <div key={message._id} className="single-msg-wrapper">
                <p className="single-msg-name">{message.name}</p>
                <p className="single-msg-text">{message.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

MessageFeed.propTypes = {
  format: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
  itinerary: PropTypes.object.isRequired,
  getMessagesItinerary: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  messages: state.messages,
  itinerary: state.itinerary
});

export default connect(
  mapStateToProps,
  { getMessagesItinerary }
)(MessageFeed);
