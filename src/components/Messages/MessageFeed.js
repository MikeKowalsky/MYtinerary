import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getMessagesItinerary,
  removeMessage
} from "../../actions/messagesActions";

import "./MessageFeed.css";

class MessageFeed extends Component {
  constructor() {
    super();
    this.state = {
      bigRemoveIcon: null
    };
  }

  componentDidMount() {
    const limit = this.props.format === "short" ? 3 : "all";
    if (
      this.props.messages.length === 0 ||
      this.props.messages[0].itineraryId !== this.props.itinerary._id ||
      limit === "all"
    )
      this.props.getMessagesItinerary(this.props.itinerary._id, limit);
  }

  removeClickHandler(messageId) {
    if (this.state.bigRemoveIcon === messageId) {
      this.props.removeMessage(messageId);
    }
    this.setState({ bigRemoveIcon: messageId });
  }

  render() {
    return (
      <div>
        <div className="section-title">
          <h4>Messages</h4>
          <div>
            {this.props.messages.map(message => (
              <div key={message._id} className="single-msg-wrapper">
                <div className="name-date-wrapper">
                  <p className="single-msg-name">{message.name}</p>
                  <p className="single-msg-name">{message.timeStamp}</p>
                  {this.props.format === "long" &&
                    this.props.user.user.id === message.user && (
                      <p
                        className={
                          "single-msg-name " +
                          (this.state.bigRemoveIcon === message._id
                            ? "bigRemoveIcon"
                            : "")
                        }
                      >
                        <i
                          className="material-icons"
                          onClick={this.removeClickHandler.bind(
                            this,
                            message._id
                          )}
                        >
                          clear
                        </i>
                      </p>
                    )}
                </div>
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
  user: PropTypes.object.isRequired,
  getMessagesItinerary: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  messages: state.messages,
  itinerary: state.itinerary,
  user: state.user
});

export default connect(
  mapStateToProps,
  { getMessagesItinerary, removeMessage }
)(MessageFeed);
